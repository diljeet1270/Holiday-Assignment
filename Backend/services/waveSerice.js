const {wavestbl} = require ('../models');

const createWave = async (values) => {
    return await wavestbl.create(values);
}
const getWaves = async (userId) =>{
    let waves = await  wavestbl.findAll({where:{userId: userId}});
    if(!waves){
        return null;
    };
    return waves;
}
const changeStatus = async (id, status) => {
    try {
        const wave = await wavestbl.findOne({ where: { id:id } });
        console.log(id, status, "this is wave", wave);

        if (!wave) {
            return null; // Wave with the given ID not found
        }

        await wavestbl.update({ status }, { where: { id } });

        return {
            id: wave.id,
            status: status
        };
    } catch (error) {
        console.error("Error in changeStatus:", error);
        throw error; // Rethrow the error for handling by the caller
    }
};


module.exports = {
    createWave,
    getWaves,
    changeStatus,
}
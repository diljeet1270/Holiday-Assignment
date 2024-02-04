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

module.exports = {
    createWave,
    getWaves,
}
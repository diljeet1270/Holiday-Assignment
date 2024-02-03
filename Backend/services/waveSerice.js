const {wavestbl} = require ('../models');

const createWave = async (values) => {
    console.log("this is image ",  values.image);
    return await wavestbl.create(values);
}
module.exports = {
    createWave,
}
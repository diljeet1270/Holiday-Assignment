const {basicDetails, personalDetails} = require ('');

const getBasicDetails = async (userId) => {
    return await basicDetails.findOne({where:{userId}});  
}

const updateBasicDetails = async (data, userId) =>{
    return await basicDetails.update(data, {where: {userId}})
}

const createBasicDetails = async (data, userId) => {
    return await basicDetails.create(...data,userId)
}

const getPersonalDetails = async (userId) => {
    return await personalDetails.findOne({where:{userId}});  
}

const updatePersonalDetails = async (data, userId) =>{
    return await personalDetails.update(data, {where: {userId}})
}

const createPersonalDetails = async (data, userId) => {
    return await personalDetails.create(...data,userId)
}

module.exports = {
    getBasicDetails,
    updateBasicDetails,
    createBasicDetails,
    getPersonalDetails,
    updatePersonalDetails,
    createPersonalDetails,
};
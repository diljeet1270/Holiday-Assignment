const {BasicDetails} = require ('../models');
const {PersonalDetails} = require('../models');

const getBasicDetails = async (userId) => {
    return await BasicDetails.findOne({where:{userId}});  
}

const updateBasicDetails = async (data, userId) =>{
    return await BasicDetails.update(data, {where: {userId}})
}

const createBasicDetails = async (data, userId) => {
    console.log("This object is not iterable",data)
    return await BasicDetails.create({...data,userId})
}

const getPersonalDetails = async (userId) => {
    return await PersonalDetails.findOne({where:{userId}});  
}

const updatePersonalDetails = async (data, userId) =>{
    return await PersonalDetails.update(data, {where: {userId}})
}

const createPersonalDetails = async (data, userId) => {
    return await PersonalDetails.create({...data,userId})
}

module.exports = {
    getBasicDetails,
    updateBasicDetails,
    createBasicDetails,
    getPersonalDetails,
    updatePersonalDetails,
    createPersonalDetails,
};
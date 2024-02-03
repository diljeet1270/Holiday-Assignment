const {usertable} = require ('../models');

const getBasicDetails = async (id) => {
    return await usertable.findOne({where:{id}});  
}

const updateBasicDetails = async (data, id) =>{
    return await usertable.update(data, {where: {id}})
}

const createBasicDetails = async (data, id) => {
    console.log("This object is not iterable",data)
    return await usertable.create({...data,id})
}

const getPersonalDetails = async (id) => {
    return await usertable.findOne({where:{id}});  
}

const updatePersonalDetails = async (data, id) =>{
    return await usertable.update(data, {where: {id}})
}

const createPersonalDetails = async (data, id) => {
    return await usertable.create({...data,id})
}

module.exports = {
    getBasicDetails,
    updateBasicDetails,
    createBasicDetails,
    getPersonalDetails,
    updatePersonalDetails,
    createPersonalDetails,
};
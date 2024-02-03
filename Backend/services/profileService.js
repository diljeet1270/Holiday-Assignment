const {usertable} = require ('../models');

const getBasicDetails = async (id) => {
    return await usertable.findOne({where:{id}});  
}

const updateBasicDetails = async (data, id) =>{
    return await usertable.update(data, {where: {id}})
}

const createBasicDetails = async (data, id) => {
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

const updateProfilePic = async (file, id) => {
    return await usertable.update({ profilePic: file.filename || null },
        {where: {id},}
    );
}

const getProfilePic = async(id) =>{
    try{
        let userDetails = await usertable.findOne({where:{id}}); 
        if(userDetails){
            return {
                profilePic: userDetails.profilePic
            } 
        }
        else {
            return null;
        }
        
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
    getBasicDetails,
    updateBasicDetails,
    createBasicDetails,
    getPersonalDetails,
    updatePersonalDetails,
    createPersonalDetails,
    updateProfilePic,
    getProfilePic,
};
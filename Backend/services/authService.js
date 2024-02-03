const { usertable } = require("../models");
const bcrypt = require("bcrypt");
const {generateToken} = require('../utils/tokenUtil');
exports.signup = async (firstName, lastName, email, password, phoneNumber) => {
  try {
    // Check if the email already exists in the user table
    const existingUser = await usertable.findOne({ where: { email } });

    if (existingUser) {
      // If the email is already taken, throw an error
      return null;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return usertable.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword,
    });
  } catch (error) {
    throw error;
  }
};
exports.login = async(email, password)=>{
  try{
    const user = await usertable.findOne({where: {email}});
    if (!user){
      // email is not valid.
      return null;
    }
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
      // Password is not valid.
      return null;
    }
    let token=await generateToken(user.id,user.email);
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      token: token,
    };
  }
  catch(error){
    throw error;
  }
};
exports.changePassword = async (id, oldPassword, newPassword) =>{
  try{
    const user = await usertable.findByPk(id);
    const isValid = await bcrypt.compare(oldPassword, user.password);
    if(isValid){
      user.password=await bcrypt.hash(newPassword, 10);
      await user.save();
      return true;
    }
    else{
      return false;
    }
  }
  catch (error){
    console.error(error);
  }
};

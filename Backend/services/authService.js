const { User } = require("../models");
const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');

exports.signup = async (firstName, lastName, email, password, phoneNumber) => {
  try {
    // Check if the email already exists in the user table
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      // If the email is already taken, throw an error
      return null;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({
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
    const user = await User.findOne({where: {email}});
    if (!user){
      // email is not valid.
      return null;
    }
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
      // Password is not valid.
      return null;
    }
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };
  }
  catch(error){
    throw error;
  }

}

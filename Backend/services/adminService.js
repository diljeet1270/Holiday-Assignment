const {admin} = require('../models')
const {generateToken, verifyToken} = require('../utils/tokenUtil');
const bcrypt = require("bcrypt");


const Signup = async (values) =>{
    try {
        const fullName = values.fullName;
        const email = values.email;
        const password = values.password;
        // Check if the email already exists in the user table
        const existingUser = await admin.findOne({ where: { email } });
    
        if (existingUser) {
          // If the email is already taken, throw an error
          return null;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        return admin.create({
          fullName,
          email,
          password: hashedPassword,
        });
      } catch (error) {
        throw error;
      }
}
const Login = async (email, password) => {
    try {
        const user = await admin.findOne({where: {email}});
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
      fullName: user.fullName,
      email: user.email,
      token: token,
    };
    }catch (error){
        console.error(error);
    }
}

module.exports = {
    Login,
    Signup,
}
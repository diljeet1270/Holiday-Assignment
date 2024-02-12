const {Login, Signup, countUser, activeUsers, countWaves} = require('../services/adminService');
const {validateAdminSignup} = require('../utils/validators');


exports.Signup = async (req, res) => {
    try {
        const {error} = validateAdminSignup(req.body);
        if (error) {
            return res.status(400).json({
              status: "error",
              message: error.details[0].message,
              data: null,
            });
          }
      
        let result = await  Signup(req.body);
        if(!result){
            res.json({
                status: 'error',
                message:'Email already exists',
                data: null
            })
        }
        else {
            res.json({
                status: 'success',
                message: "Admin user Created Successfully",
                data: result,
            })
        }
    } catch (error) {
        console.error(error);
        res.json({
            status: 'Error',
            message: "Internal Server error",
            data: null,
        })
    }
}
exports.Login = async (req, res) =>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        let  result = await Login(email, password);
        if(!result){
            return res.status(401).send({message: 'Invalid Credentials'});
            }else{
                res.json({
                    status: 'succes',
                    message: "login sucessfull",
                    data: result,
                })
            }
    } catch (error) {
        console.error(error);
        res.json({
            status: 500,
            message: "Internal Server error",
            data: null,
        })
    }
}
exports.countUsers = async (req, res) => {
    try {
        const totalUser = await countUser();
        if(totalUser){
            res.json({
                status: "sucess",
                message: "User found",
                data: totalUser,
            })
        }
        else {
            res.json({
                status: "succes",
                message: "No user found",
                data: null,
            })
        }
    } catch (error) {
        res.json({
            status: "error",
            message: "internal server error",
            data: null,
        })
    }
}
exports.activeUsers = async (req, res) => {
    try {
        const totalUser = await activeUsers();
        if(totalUser){
            res.json({
                status: "sucess",
                message: "User found",
                data: totalUser,
            })
        }
        else {
            res.json({
                status: "succes",
                message: "No user found",
                data: null,
            })
        }
    } catch (error) {
        res.json({
            status: "error",
            message: "internal server error",
            data: null,
        })
    }
}
exports.countWaves = async (req, res) => {
    try {
        const totalUser = await countWaves();
        if(totalUser){
            res.json({
                status: "sucess",
                message: "Waves counted",
                data: totalUser,
            })
        }
        else {
            res.json({
                status: "succes",
                message: "No waves found",
                data: null,
            })
        }
    } catch (error) {
        res.json({
            status: "error",
            message: "internal server error",
            data: null,
        })
    }
}
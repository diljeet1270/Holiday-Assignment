const {Login, Signup} = require('../services/adminService');
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
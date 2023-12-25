const authService = require('../services/authService');
const { validateSignup, validateLogin } = require('../utils/validators');

exports.signup = async (req, res) => {
    try {
        const { error } = validateSignup(req.body);
        if (error) {
            return res.status(400).json({
                status: 'error',
                message: error.details[0].message,
                data: null
            });
        }

        const { firstName, lastName, email, password, phoneNumber } = req.body;
        const user = await authService.signup(firstName, lastName, email, password, phoneNumber);

        if (!user) {
            return res.json({
                status: 'error',
                message: 'Email already exists',
                data: null
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Signup successful',
            data: { user }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
            data: null
        });
    }
};
exports.login = async (req, res) => {
    try{
        const {error} = validateLogin(req.body, { abortEarly: false });
        if (error) {
            res.status(400).json({
                 status: "error",
                 message: error.details[0].message,
                 data: null,
            })
        }
        const {email, password} = req.body;
        console.log(email);

        const user = await authService.login(email, password);
        if (!user){
           return res.json({
                status: "error",
                message: "Invalid Credentials",
                data: null,
            })
        }
        res.status(200).json({
            status: "success",
            message: "Login successful",
            data: {user},
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "Internal server error",
            data: null,
        })
    }
}
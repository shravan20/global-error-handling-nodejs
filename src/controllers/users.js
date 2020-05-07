var userService = require('../services/users');

//Call passing  the control to Service layer ; Usually where business logic
const getUser =  (req,res,next) => {

    try{
    let resp = userService.getUser()
    res.send(resp);
    }
    catch(err){
        // console.error(typeof err);
        res.status(400).json(err);
    }

}

module.exports = {
    getUser
}
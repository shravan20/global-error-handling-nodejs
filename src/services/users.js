var userDal = require('../dal/users');

//Usually where the business logic lies 
const getUser = () => {
   try{
   return userDal.getUser()
   }
   catch(err){
       throw err;
   }
}


module.exports = {

    getUser

}
// var userDal = require('../dal/users');

// const createError = (message)=>({
//     error: new Error(message),
//     code: 'VALIDATION_ERROR',
//     // stackTrace: Error.captureStackTrace(error)
//   });

const MyError = (message)=>{
    const internal = {
      error: new Error(message),
      code: 'MY_CUSTOM_ERROR'
    };
  
    return {
      ...internal,
      toJSON:()=>({
        code: internal.code,
        stack: internal.error.stack,
        message
      })
    }
  }
  
  MyError.prototype = Object.create(Error.prototype);

const getUser = () => {

    try {
    //MongoDB Query
        // return { 
        //     username : 'Shravan K B',
        //     password : 'password',
        //     designation : 'Application Developer'
        // }
      //  x = ValidationError('opps');
        // x =  MyError('');
        // y = 1
        // console.log(x instanceof MyError)
        // console.log(!y instanceof Number)
        throw  MyError('opps'); // throw EvalError
    }
    catch(err){
        console.log(err)
        throw (err);

    }

}


module.exports = {

    getUser

}
var root = require('./rootErrGen');

const f1 = () => {
    try {
        console.log("Hello")
        val = root.errGen();
        return val;
        

        // console.log("Hello")
                
    } 
    catch (error) {
         console.log(error)
        // return new Error(error);
        return error
    }

}

module.exports = {
    f1
}
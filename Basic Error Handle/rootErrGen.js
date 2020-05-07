const errGen = () => {

    try {

        console.log('Root Error Causer fn!!');
        throw new Error('Oh my Error! I am causing the error');
        return 10;
    } 
    catch (error) {

        console.log('Root Error Causer:',error.message);
        return error;
        
        }

}

module.exports = {
    errGen
}  
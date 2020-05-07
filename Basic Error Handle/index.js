var err = require('./errGen');

try {
    value = err.f1();
    
    console.log('In f1 function:',value);    
} catch (error) {
    console.log('Initial Pointer f1',error);
}

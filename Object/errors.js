/*console.log('test1');
console.log('test2');
try {
    console.log(f);
} catch (err) {
    // error handling or do nothing
}
console.log('test3');
console.log('test4');
try {
    console.log(f); // (1)
    // ...no errors here
    console.log('End of try runs'); // (2)
} catch (err) {
    console.log('ignored, no errors'); // (3)
    }
    console.log("...Execution continues");
console.log('test5');
console.log('test6');
console.log('test7');
*/


console.log('test1');
console.log('test2');
try {
    console.log('Start of try runs'); // (1)
    // ...no errors here
    console.log('End of try runs'); // (2)
    throw new Error("OMG something went wrong");
    } catch (err) {
    console.log('ignored, no errors'); // (3)
    }
    
    console.log("...Execution continues");
console.log('test5');
console.log('test6');
console.log('test7');
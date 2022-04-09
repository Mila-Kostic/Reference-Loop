var x = 10;  // simple date type
var y = [12, 22]; // complex data type


function info(arg){
    // x = 20; // we don't have change x ?
    arg = 20; // we have change x
    console.log("x like arg is " + arg);
}

info(x); //PASS BY VALUE - pass by value of x in function on place arg

console.log("x like global x is " + x);
var x = 10;

var names = ['Danilo', "Ana"];

function info(arg){
    arg[2] = "Milos"; //we change pass names
    console.log(arg);
}

info(names); //PASS BY REFERENCE

console.log(names); // change global var names after change in functions
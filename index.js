var cowsay = require("cowsay");

const information = require('./information')

console.log(information) 

let cowSay = console.log(cowsay.say({
   text : ` hy my name is ${information.prenom} et je suis a la ${information.campus}`
}));


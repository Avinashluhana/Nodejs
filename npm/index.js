const chalk = require("chalk");
const validator = require("validator");


console.log(chalk.blue.inverse("Bye World"))


// *******validation

const validation = validator.isEmail("aviluhana@gmail.com");


console.log(validation ? chalk.green.inverse(validation) : chalk.red.inverse(validation))
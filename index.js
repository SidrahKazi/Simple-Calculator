import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action.",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

//var iNum1 = Number(asnwer.firstNumber);
//var iNum2 = Number(asnwer.secondNumber);

// conditional statement
if (asnwer.operator === "Addition") {
    console.log((asnwer.firstNumber) + (asnwer.secondNumber));
    //console.log(iNum1 - iNum2);
}
else if (asnwer.operator === "Subtraction") {
    console.log(Number(asnwer.firstNumber) - Number(asnwer.secondNumber));
}
else if (asnwer.operator === "Multiplication") {
    console.log(Number(asnwer.firstNumber) * Number(asnwer.secondNumber));
}
else if (asnwer.operator === "Division") {
    console.log(Number(asnwer.firstNumber) / Number(asnwer.secondNumber));
}
else {
    console.log("Please select valid operator");
}

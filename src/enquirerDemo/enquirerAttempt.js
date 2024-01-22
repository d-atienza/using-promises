const { prompt } = require("enquirer");

prompt({
    type: "input",
    message: "What is your favourite colour?",
    name: "faveColour",
}).then((response) => {console.log("you said your colour was: ", response.faveColour)});

// function handleColourInput(result) {
//     console.log("you said your colour was: ", result.faveColour);
// }

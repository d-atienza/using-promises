const { prompt } = require("enquirer");

const promiseOfInput = prompt({
    type: "autocomplete",
    name: "flavor",
    message: "Pick your favorite flavor",
    limit: 10,
    choices: ["Apple", "Blackberry", "Watermelon"],
});

promiseOfInput.then((response) => {
console.log("Ok Making ice-cream with:", response.flavor);
});

// function handleResult(answer) {
//     console.log("Ok Making ice-cream with:", answer.flavor);
// }

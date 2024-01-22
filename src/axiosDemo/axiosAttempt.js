const axios = require("axios").default;

const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
const resultingPromise = axios.get(url);
resultingPromise.then(processResolvedPromise);

console.log({ resultingPromise });

function processResolvedPromise(resultFromPromise) {
    console.log("promise resolved. result is: ");
    console.log(".stats: ", resultFromPromise.status);
    console.log(".data: ",resultFromPromise.data);
};




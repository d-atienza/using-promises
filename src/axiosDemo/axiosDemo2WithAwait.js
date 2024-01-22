const axios = require("axios").default;

async function mainTask() {
    const result = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    console.log("GET completed.  Result object includes: ");
    console.log(result.status);
    console.log(result.data.results);
}

mainTask();
console.log("after main task");

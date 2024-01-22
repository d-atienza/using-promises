const { prompt } = require('enquirer');

function favChoco() {
  return prompt({
    type: "input",
    name: "faveChoco",
    message: "What's your favourite chocolate bar?",
  })
}

function favCandy(){
  return prompt({
    type: "input",
    name: "faveCandy",
    message: "What's your favourite candy?",
  })

}

async function main(){
  const chocolateResult = await favChoco();
  const candyResult = await favCandy();
  console.log(chocolateResult, candyResult)
}

main();


const { Quiz } = require('enquirer');

 
//jsdoc
async function main() {
  let score = 0;

  // question 1
  let answersObject1 = await question1();  //awaiting the completion of promise
  
  if (answersObject1.correct){
    score++;
  }
 
  // question 2
  let answersObject2 = await question2(); 
  
  if (answersObject2.correct){
    score++;
  }

  console.log(answersObject1, answersObject2, score);
  
}

//jsdoc - function that returns a promise
function question1() {
  const prompt1 = new Quiz({
    name: 'countries',
    message: 'How many countries are there in the world?',
    choices: ['165', '175', '185', '195', '205'],
    correctChoice: 3
  });

  return prompt1.run(); // prompt.run() returns a promise
}

function question2() {
  const prompt2 = new Quiz({
    name: 'countries',
    message: 'How many countries are there in the world?',
    choices: ['165', '175', '185', '195', '205'],
    correctChoice: 3
  });

  return prompt2.run();
}

main();
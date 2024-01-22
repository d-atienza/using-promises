const { Quiz } = require('enquirer');

 

async function main() {
  let score = 0;

  // question 1
  const prompt1 = new Quiz({
    name: 'countries',
    message: 'How many countries are there in the world?',
    choices: ['165', '175', '185', '195', '205'],
    correctChoice: 3
  });

  let answersObject1 = await prompt1.run();
  
  if (answersObject1.correct){
    score++;
  }
 
  // question 2
  const prompt2 = new Quiz({
    name: 'countries',
    message: 'How many countries are there in the world?',
    choices: ['165', '175', '185', '195', '205'],
    correctChoice: 3
  });

  let answersObject2 = await prompt2.run();
  
  if (answersObject2.correct){
    score++;
  }

  console.log(answersObject1, answersObject2, score);
  
}

main();
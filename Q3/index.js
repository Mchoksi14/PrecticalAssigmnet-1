// cli.js
const readline = require('readline');
const Chatbot = require('./chatbot.module');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const chatbot = new Chatbot();

function promptUser() {
  rl.question('You: ', (userInput) => {
    if (userInput.toLowerCase() === 'exit') {
      rl.close();
      return;
    }

    const response = chatbot.processMessage(userInput);
    console.log('Chatbot:', response);

    promptUser();
  });
}

console.log('Chatbot: Hello! I am your echo bot. Type "exit" to quit.');
promptUser();

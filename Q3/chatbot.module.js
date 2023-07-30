class Chatbot {
    constructor() {
      // You can initialize any required variables or settings here
    }
  
    processMessage(message) {
      // Process the user's message here (in this case, just echo it back)
      if(message==='hiii')
      return 'Hello';
      else if(message==="how are you ?")
        return 'I am fine. What about you ?';
      else if(message ==="I am also fine")
        return'Ohh Nice';
    }
  }
  
  module.exports = Chatbot;
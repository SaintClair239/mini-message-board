const path = require('path');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

exports.getMessages = (req, res, next) => {
  console.log(messages);
  res.render(path.join('index'), { msgs: messages });
};

exports.messages = messages;

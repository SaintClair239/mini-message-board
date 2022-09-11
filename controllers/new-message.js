const path = require('path');
const messagesController = require('./messages');

exports.getNewMessage = (req, res, next) => {
  res.render(path.join('new-message'));
};

exports.postNewMessage = (req, res, next) => {
  const message = {
    user: req.body.author,
    text: req.body.message,
    added: new Date(),
  };

  messagesController.messages.push(message);
  res.redirect('/');
};

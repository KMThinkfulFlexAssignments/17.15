'use strict';
const uuid = require('uuid/v4');

let bookmarks = [
  { id: uuid(),
    title: 'Yahoo Answers',
    url: 'answers.yahoo.com',
    description: 'Ask a question, usually answered in minutes!',
    rating: 4
  }
];

module.exports = { bookmarks};
const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true
});

module.exports = function(value) {
  return markdownIt.render(value);
};

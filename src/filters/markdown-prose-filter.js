const markdownIt = require('markdown-it')({
  html: true,
  breaks: false,
  linkify: false
});

module.exports = function markdown(value) {
  return markdownIt.render(value);
};

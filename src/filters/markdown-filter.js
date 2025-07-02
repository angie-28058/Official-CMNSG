const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true
});

const markdownItNoBreaks = require('markdown-it')({
  html: true,
  breaks: false,
});

module.exports = {
  markdown(value) {
    return markdownIt.render(value);
  },
  markdownNoBreaks(value) {
    return markdownItNoBreaks.render(value);
  }
};

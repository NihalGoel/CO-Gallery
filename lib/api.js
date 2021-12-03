const helpers = require('./postHelpers.js');

module.exports = async () => {
const allPosts = helpers.getAllPosts([
  'title',
  'slug',
  'content',
])
  return {
    code: `module.exports = ${JSON.stringify(allPosts)}`
  }
}

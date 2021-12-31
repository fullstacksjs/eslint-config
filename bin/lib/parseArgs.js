const yargs = require('yargs');

const args = yargs(process.argv.slice(2))
  .alias('t', 'technology')
  .describe('t', 'Which technology are you using')
  .choices('t', ['ts', 'js'])
  .usage('Usage: $0 [-t ts|js]')
  .example('$0 - ts')
  .help('h')
  .alias('h', 'help').argv;

module.exports = args;

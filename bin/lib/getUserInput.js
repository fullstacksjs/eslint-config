const inquirer = require('inquirer');

function getUserInput() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'language',
      message: 'which technology are you using?',
      choices: [
        {
          value: 'ts',
          name: 'ESLint alongside TypeScript',
        },
        {
          value: 'js',
          name: 'ESLint for JavaScript development',
        },
      ],
      default: 'js',
    },
  ]);
}

module.exports = getUserInput;

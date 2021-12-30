const inquirer = require('inquirer');

const { args, createAnswers } = require('./parseArgs');

const getUserInput = async () => {
  if (Object.keys(args).length > 2) {
    const answers = createAnswers();
    return answers;
  }
  const answers = await inquirer.prompt([
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
  return answers;
};

module.exports = getUserInput;

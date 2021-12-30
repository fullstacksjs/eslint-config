const Listr = require('listr');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const generateFile = require('./generateFile');

const runTasks = (packages, eslintrcConfig) => {
  const npmInstall = packages.map(pkg => {
    return {
      title: `Installing ${pkg}`,
      task: async (ctx, task) => exec(`npm i -D ${pkg}`).then(() => (task.title = `${pkg} Installed`)),
    };
  });

  const tasks = new Listr(
    [
      {
        title: 'Installing dependencies using npm',
        task: () => new Listr(npmInstall, { exitOnError: false }),
      },
      {
        title: 'Generating .eslintrc file',
        task: (ctx, task) => generateFile(eslintrcConfig, ctx, task),
      },
    ],
    { exitOnError: false },
  );

  tasks.run().catch(() => {});
};
module.exports = runTasks;

const Listr = require('listr');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const createFileTask = require('./generateFile');

function createTasks({ packages, eslintrc }) {
  const installTasks = packages.map(pkg => ({
    title: `Installing ${pkg}`,
    task: (ctx, task) => exec(`npm i -D ${pkg}`).then(() => (task.title = `${pkg} Installed`)),
  }));

  return new Listr(
    [
      {
        title: 'Installing dependencies using npm',
        task: () => new Listr(installTasks, { exitOnError: true }),
      },
      {
        title: 'Generating .eslintrc file',
        task: (ctx, task) => createFileTask(eslintrc, ctx, task),
      },
    ],
    { exitOnError: false },
  );
}

module.exports = createTasks;

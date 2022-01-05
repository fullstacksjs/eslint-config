const Listr = require('listr');
const util = require('util');
const askWhenConfigExists = require('./askWhenConfigExists');
const exec = util.promisify(require('child_process').exec);
const createFileTask = require('./generateFile');

async function createTasks({ packages, eslintrc }) {
  const installTasks = packages.map(pkg => ({
    title: `Installing ${pkg}`,
    task: (ctx, task) => exec(`npm i -D ${pkg}`).then(() => (task.title = `${pkg} Installed`)),
  }));

  const config = await askWhenConfigExists(eslintrc);

  return new Listr(
    [
      {
        title: 'Installing dependencies using npm',
        task: () => new Listr(installTasks, { exitOnError: true }),
      },
      {
        title: 'Generating .eslintrc.json file',
        task: (ctx, task) => createFileTask(config, ctx, task),
      },
    ],
    { exitOnError: false },
  );
}

module.exports = createTasks;

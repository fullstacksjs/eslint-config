const { writeFile } = require('fs/promises');

function createFileTask(eslintrc, ctx, task) {
  return writeFile('.eslintrc', JSON.stringify(eslintrc, null, 2))
    .then(() => {
      task.title = `.eslintrc - Successfully Generated.`;
    })
    .catch(() => {
      ctx.isEslintrc = false;
      task.title = `Generating .eslintrc file`;
      throw Error("Couldn't create file");
    });
}

module.exports = createFileTask;

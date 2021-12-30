const { writeFileSync } = require('fs');

const generateFile = (eslintconfig, ctx, task) => {
  try {
    writeFileSync('.eslintrc', JSON.stringify(eslintconfig, null, 2));
    task.title = `.eslintrc - Successfully Generated.`;
    return Promise.resolve('ok');
  } catch (err) {
    ctx.isEslintrc = false;
    task.title = `Generating .eslintrc file`;
    return new Error("Couldn't create file");
  }
};
module.exports = generateFile;

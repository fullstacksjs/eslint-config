/* eslint 'no-console': ['warn', { allow: ['warn'] }] */

import { includeIgnoreFile } from '@eslint/compat';
import fs from 'node:fs';
import path from 'node:path';

const warningMessage = '\u001B[38;2;229;229;14mWarning:\u001B[0m';
const fallbackMessage =
  'Falling back to default ignore patterns. You can suppress this warning by setting \u001B[48;5;234m`gitignore: false`\u001B[0m in the config.';

/**
 * @param {string} gitignorePath relative path to the .gitignore file
 * @returns {string[]}
 */
export function getGitignorePatterns(gitignorePath) {
  const gitignoreAbsolutePath = path.resolve(process.cwd(), gitignorePath);
  const gitignoreExists = fs.existsSync(gitignoreAbsolutePath); // eslint-disable-line n/no-sync
  const gitignorePatterns = [];

  if (!gitignoreExists) {
    console.warn(warningMessage, `No .gitignore file found at "${gitignoreAbsolutePath}".`, fallbackMessage);

    return gitignorePatterns;
  }

  const ignorePatterns = includeIgnoreFile(gitignoreAbsolutePath).ignores ?? [];

  if (ignorePatterns.length > 0) {
    gitignorePatterns.push(...ignorePatterns);
  } else {
    console.warn(warningMessage, `No patterns found in .gitignore file at "${gitignoreAbsolutePath}".`, fallbackMessage);
  }

  return gitignorePatterns;
}

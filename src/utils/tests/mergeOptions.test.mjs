import { describe, expect, it } from 'vitest';

import { mergeOptions } from '../mergeOptions.mjs';

describe('mergeOptions', () => {
  it('returns the defaults when overrides is an empty object', () => {
    const defaults = { react: true, regex: { allowedCharacterRanges: ['all'] } };

    expect(mergeOptions(defaults, {})).toEqual(defaults);
  });

  it('does not mutate defaults or overrides', () => {
    const defaults = { typescript: { projectService: true } };
    const overrides = { typescript: { tsconfigRootDir: '.' } };

    mergeOptions(defaults, overrides);

    expect(defaults).toEqual({ typescript: { projectService: true } });
    expect(overrides).toEqual({ typescript: { tsconfigRootDir: '.' } });
  });

  it('replaces primitive values', () => {
    expect(mergeOptions({ react: true }, { react: false })).toEqual({ react: false });
  });

  it('adds keys that are missing from the defaults', () => {
    expect(mergeOptions({ react: true }, { strict: true })).toEqual({ react: true, strict: true });
  });

  describe('plain objects', () => {
    it('merges one level deep and keeps default keys', () => {
      const result = mergeOptions({ typescript: { projectService: true } }, { typescript: { tsconfigRootDir: '.' } });

      expect(result.typescript).toEqual({ projectService: true, tsconfigRootDir: '.' });
    });

    it('returns a new container for merged objects', () => {
      const defaults = { typescript: { projectService: true } };
      const overrides = { typescript: { tsconfigRootDir: '.' } };

      const result = mergeOptions(defaults, overrides);

      expect(result.typescript).not.toBe(defaults.typescript);
      expect(result.typescript).not.toBe(overrides.typescript);
    });

    it('lets user keys win when both objects contain the same key', () => {
      const result = mergeOptions({ typescript: { projectService: true } }, { typescript: { projectService: false } });

      expect(result.typescript.projectService).toBe(false);
    });

    it('does not merge nested objects beyond one level', () => {
      const result = mergeOptions({ a: { b: { c: 1, d: 2 } } }, { a: { b: { c: 3 } } });

      expect(result.a.b).toEqual({ c: 3 });
    });

    it('replaces an object default with a boolean and a boolean default with an object', () => {
      const projectService = { allowDefaultProject: ['a.ts'] };

      expect(mergeOptions({ typescript: { projectService: true } }, { typescript: false }).typescript).toBe(false);
      expect(mergeOptions({ typescript: { projectService: true } }, { typescript: { projectService } }).typescript.projectService).toBe(
        projectService,
      );
    });
  });

  describe('arrays', () => {
    it('replaces the default array instead of concatenating', () => {
      const result = mergeOptions({ regex: { allowedCharacterRanges: ['all'] } }, { regex: { allowedCharacterRanges: ['ascii'] } });

      expect(result.regex.allowedCharacterRanges).toEqual(['ascii']);
    });

    it('replaces a top-level array', () => {
      expect(mergeOptions({ ignores: ['a'] }, { ignores: ['b'] }).ignores).toEqual(['b']);
    });
  });

  describe('special values', () => {
    it('ignores undefined overrides', () => {
      const defaults = { react: true, typescript: { projectService: true } };

      expect(mergeOptions(defaults, { react: undefined, typescript: undefined })).toEqual(defaults);
    });

    it('treats null as a real override', () => {
      expect(mergeOptions({ react: true }, { react: null }).react).toBeNull();
    });
  });

  describe('identity preservation', () => {
    it('preserves the reference of a plugin', () => {
      const plugin = { rules: {} };
      const result = mergeOptions({}, { plugins: { custom: plugin } });

      expect(result.plugins.custom).toBe(plugin);
    });

    it('preserves the reference of a parser', () => {
      const parser = { parseForESLint() {} };
      const result = mergeOptions({}, { parser });

      expect(result.parser).toBe(parser);
    });

    it('preserves the reference and prototype of a class instance', () => {
      class Plugin {
        meta = {};
      }
      const plugin = new Plugin();
      const result = mergeOptions({}, { plugin });

      expect(result.plugin).toBe(plugin);
      expect(Object.getPrototypeOf(result.plugin)).toBe(Plugin.prototype);
    });

    it('replaces a default with a class instance instead of merging it', () => {
      class Config {
        extra = true;
      }
      const instance = new Config();

      expect(mergeOptions({ typescript: { projectService: true } }, { typescript: instance }).typescript).toBe(instance);
    });

    it('replaces a class instance default with a plain object instead of merging it', () => {
      class Config {
        extra = true;
      }
      const override = { projectService: true };

      expect(mergeOptions({ typescript: new Config() }, { typescript: override }).typescript).toBe(override);
    });
  });

  it('merges a realistic user config', () => {
    const plugin = { rules: {} };
    const defaults = {
      react: true,
      typescript: { projectService: true },
      import: {},
      regex: { allowedCharacterRanges: ['all'] },
      ignores: [],
    };
    const overrides = {
      strict: true,
      typescript: { tsconfigRootDir: '/repo', overrides: { plugins: { custom: plugin } } },
      import: { extensions: 'always' },
      regex: { allowedCharacterRanges: ['ascii'] },
      ignores: ['dist'],
    };

    expect(mergeOptions(defaults, overrides)).toEqual({
      react: true,
      strict: true,
      typescript: { projectService: true, tsconfigRootDir: '/repo', overrides: { plugins: { custom: plugin } } },
      import: { extensions: 'always' },
      regex: { allowedCharacterRanges: ['ascii'] },
      ignores: ['dist'],
    });
  });
});

### From v12 to v13

Use `defineConfig` instead of `init` and add your tailwind CSS path for tailwind v4 support.

```diff
- import { init } from '@fullstacksjs/eslint-config';
+ import { defineConfig } from '@fullstacksjs/eslint-config';

- export default init();
+ export default defineConfig({
+   tailwind: {
+      entryPoint: 'PATH/TO/CSS'
+   }
+ });
```


### From v11 to v12

Add `tsconfigRootDir` to enable projectService.

```diff
import { init } from '@fullstacksjs/eslint-config';

- export default init();
+ export default init({
+   typescript: {
+     tsconfigRootDir: import.meta.dirname,
+   }
+ });
```

### From v10 to v11

v11 drops support for ESLint v8 configuration and only ESLint v9 is supported, which means you should migrate to [ESlint Flat Config](https://eslint.org/docs/latest/extend/plugin-migration-flat-config):

1. Move your configs to `eslint.config.js` file.
2. Use init API.
    ```diff
    -const { init } = require('@fullstacksjs/eslint-config/init');
    +import { init } from '@fullstacksjs/eslint-config';

    -module.exports = init({
    -  modules: {
    -    auto: true,
    -    esm: true,
    -    typescript: {
    -      parserProject: ['./tsconfig.eslint.json'],
    -      resolverProject: ['./tsconfig.json'],
    -    },
    -  },
    -  // your configuration
    -});
    +export default init({
    +    esm: true,
    +    typescript: true,
    +  },
    +  // your configuration
    +);
    ```

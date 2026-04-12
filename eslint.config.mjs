import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist/**', 'docs/**', 'reports/**', 'node_modules/**']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['source/**/*.ts', 'source/**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      'comma-dangle': ['error', 'never'],
      'max-len': ['error', {code: 320}],
      'new-cap': 'off',
      'no-constant-binary-expression': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
);

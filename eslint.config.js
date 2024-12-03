// eslint.config.js
const { ESLint } = require('eslint');
const eslintPluginReact = require('eslint-plugin-react');
const typescriptParser = require('@typescript-eslint/parser');

const eslint = new ESLint();

module.exports = [
  {
    languageOptions: {
      parser: typescriptParser, // Укажите парсер как объект
      globals: {
        // Определите глобальные переменные здесь, если это необходимо
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    plugins: {
      react: eslintPluginReact, // Укажите плагин как объект
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      // Добавьте другие правила здесь
    },
  },
  // Добавьте правила ESLint и плагинов, которые вам нужны
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      // Правила для JavaScript и TypeScript
    },
  },
];

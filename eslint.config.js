import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      semi: ['error', 'never'],
      quotes: ['error', 'single']
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**']
  }
)

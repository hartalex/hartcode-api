module.exports = {
  extends: 'standard',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [ 'standard', 'promise', 'import' ],
  globals: { fetch: false, describe: false, it: false, alert: false, ga: false }
}

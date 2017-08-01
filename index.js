module.exports = {
  extends: [
    'airbnb-base'
  ],
  rules: {
    'arrow-parens': [2, 'always'],
    'comma-dangle': [2, 'never'],
    'max-len': [2, 120, 2],
    'no-unused-vars': [2, { vars: 'local', args: 'none' }],
    'no-restricted-syntax': [2, 'DebuggerStatement', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'semi': [2, 'never']
  }
}

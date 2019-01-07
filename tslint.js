module.exports = {
  defaultSeverity: 'error',
  rules: {
    'max-classes-per-file': false,
    'ordered-imports': false,
    'interface-over-type-literal': false,
    'member-access': [true, 'no-public'],
    'prefer-const': false,
    'array-type': [true, 'generic'],
    'variable-name': false,
    'object-literal-sort-keys': false,
    'interface-name': [true, 'never-prefix'],
    'no-empty': [true, 'allow-empty-functions'],
  },
};

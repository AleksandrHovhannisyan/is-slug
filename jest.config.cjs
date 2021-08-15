module.exports = {
  rootDir: '.',
  testMatch: ['**/?(*.)(spec|test).(ts|js)'],
  transform: {
    '^.+.ts$': 'babel-jest',
  },
};

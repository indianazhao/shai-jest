module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/src/setup.jest.ts',
    '<rootDir>/node_modules/@hirez_io/jest-given/dist/jest-given.js',
  ],
  globalSetup: 'jest-preset-angular/global-setup',
};

module.exports = {
    transform: {
      '^.+\\.[tj]sx?$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts'],
    moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx'],
    preset: 'ts-jest'
  };
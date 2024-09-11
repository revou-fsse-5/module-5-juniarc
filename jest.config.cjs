module.exports = {
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
  };
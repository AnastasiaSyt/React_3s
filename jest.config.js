module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  transformIgnorePatterns: ['/node_modules/(?!(react-image-select)/)'],
};

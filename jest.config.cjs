   /** @type {import('jest').Config} */
   module.exports = {
    testEnvironment: "jsdom",
     testEnvironmentOptions: {
         customExportConditions: [""]
     },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "^.+\\.svg$": "<rootDir>/svgTransform.cjs"
    },
      transformIgnorePatterns: ["node_modules/(?!@testing-library/jest-dom)"],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json']
};
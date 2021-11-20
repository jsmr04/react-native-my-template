module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: ["MY_PARAMETER"],
        safe: false,
        allowUndefined: false,
      },
    ],
  ],
};

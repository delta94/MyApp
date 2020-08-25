module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    [
        "module-resolver",
        {
            root: ["./src"],
            extensions: [".tsx"],
            alias: {
              "@app": "./src/app",
              "@assets": "./src/assets",
              "@components": "./src/components",
              "@constant": "./src/constant",
              "@data": "./src/data",
              "@images": "./src/images",
              "@navigation": "./src/navigation",
              "@scenes": "./src/scenes",
              "@util": "./src/util",
            }
        }
    ]
  ],
};

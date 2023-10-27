module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@src': './src',
            '@root': './', // <-- Adding this line
          },
        },
      ],
    ],
  };
};

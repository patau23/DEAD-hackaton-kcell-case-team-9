module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          alias: {
            // define aliases to shorten the import paths
            'hooks': './src/hooks'
          },
          extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js']
        }
      ]
    ]
  }
}

module.exports = {

  entry: './client/src/index.js',


  output: {
    filename: 'client/public/bundle.js',
  },


  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /client/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          compact: 'false',
        },
      },

      {
        test: /\.scss$/,
        // loaders:'style-loader!css-loader!sass-loader'
        loader: ['style-loader', 'css-loader', 'sass-loader'],

      },

      { test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, loader: 'url-loader?limit=100000' },
    ],
  },
};


// css-loader
// node-sass
// sass-loader
// style-loader

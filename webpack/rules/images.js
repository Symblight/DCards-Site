const rules = [
  {
    test: /\.(jpg|png|svg)(\?.*$|$)$/,
    loader: 'file-loader',
    options: {
      name: 'assets/images/[name]-[hash].[ext]'
    },
  },
  {
  test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)$/,
    loader: 'file-loader',
    options: {
      name: 'assets/fonts/[name]-[hash].[ext]'
    },
  },
];

module.exports.config = rules;

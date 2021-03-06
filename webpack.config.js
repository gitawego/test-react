var webpack = require('webpack');

module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:9000",
		'webpack/hot/only-dev-server',
		"./src/index"
	],
	output: {
		path: __dirname + '/build',
		filename: "bundle.js",
		publicPath: '/build/',
	},
	resolve: {
		extensions: ["", ".js", ".jsx"]
	},
	module: {
		loaders: [{
				test: /\.jsx?$/,
				loaders: ["react-hot-loader/webpack", 'babel-loader'],
				exclude: /node_modules/
			},

			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};

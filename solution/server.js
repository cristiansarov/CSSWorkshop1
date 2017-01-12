'use strict';
require('core-js/fn/object/assign');
const config = require('./webpack.config.js');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');


new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, config.host, (err) => {
  /* eslint no-console:0 */
  if (err) console.log(err);
  console.log('Listening at http://'+config.host+':' + config.port);
});
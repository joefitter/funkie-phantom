'use strict';

const phantom = require('phantomjs-prebuilt');

module.exports = () => {
  let server;
  return {
    start: () => {
      return phantom.run('--webdriver=4444', '--web-security=no').then((s) => {
        server = s;
      });
    },
    stop: () => {
      server.kill();
    }
  };
};

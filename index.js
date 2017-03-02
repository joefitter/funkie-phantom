'use strict';

const phantom = require('phantomjs-prebuilt');

module.exports = () => {
  let server;
  return {
    start: () => {
      return phantom.run('--webdriver=4444 --local-to-remote-url-access=true').then((s) => {
        server = s;
      });
    },
    stop: () => {
      server.kill();
    }
  };
};

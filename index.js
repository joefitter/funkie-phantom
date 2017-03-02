'use strict';

const phantom = require('phantomjs-prebuilt');

module.exports = () => {
  let server;
  return {
    start: () => {
      return phantom.run('--ignore-ssl-errors=true', '--web-security=false', '--ssl-protocol=tlsv1', '--local-to-remote-url-access=true', '--webdriver=4444', '--debug=true').then((s) => {
        server = s;
      });
    },
    stop: () => {
      server.kill();
    }
  };
};

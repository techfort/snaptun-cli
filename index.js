/**
 * snaptun-cli
 * command line utility to interact with snaptun, the http wrapper for lokijs
 *
 */


var request = require('request'),
  input = readline.createInterface(process.stdin, process.stdout),
  baseUrl = process.argv[2];

function SnaptunProtocol() {


  return {
    'coll:add': function (collName) {
      request(baseUrl + '/addcollection') // WIP
    }
  };
}



input.setPrompt('<| ');
input.prompt();
input.on('line', function (line) {

}).on('close', function () {
  process.exit(0);
});
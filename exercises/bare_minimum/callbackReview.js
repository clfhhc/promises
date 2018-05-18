/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      if (callback) {
        return callback(err);
      }
    } else {
      let firstLine = content.split('\n')[0];
      if (callback) {
        return callback(err, firstLine);
      }
    }
    
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  try {
    request
      .get(url)
      .on('response', function(response) {
        if (callback) {
          return callback(undefined, response.statusCode);
        }
      })
      .on('error', function(err) {
        console.log(err);
        if (callback) {
          return callback(err);
        }
      });
  } catch (err) {
    if (callback) {
      return callback(err);
    }
  }
  
    
  
    
    

  
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

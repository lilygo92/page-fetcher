const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

const fetcher = (url, file) => {
  setTimeout(() => {
    request(url.toString(), (error, response, body) => {
      const bytes = body.length;

      fs.writeFile(file, body, err => {
        if (err){
          console.error(err);
        }
      });
      return console.log(`Downloaded and saved ${bytes} bytes to ${file}.`);
    });
    
  })

  
};

fetcher(args[0], args[1]);




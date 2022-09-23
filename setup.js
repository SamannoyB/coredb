const fs = require("fs");

const setup = {
    setup: () => {
        if (fs.existsSync('D:/coredb/')) {
            console.log('[ERROR]: Database folder already exists at D:/');
        } else {
            fs.mkdirSync('D:/coredb/');
        }
    }
  } 

exports = module.exports = setup;
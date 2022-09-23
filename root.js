const fs = require('fs');
const fse = require('fs-extra');
const setup = require('./setup');
//core-db
  
const db = {
  newDb: (name) => {
    if (fs.existsSync('D:/coredb/')) {
      if (fs.existsSync(`D:/coredb/${name}.json`)) {
        console.log('[ERROR]: Database already exists 500');
    }
    else {
    fs.writeFileSync(`D:/coredb/${name}.json`, '{}');
    console.log('Database created!');
    }
    } else {
      console.log("[ERROR]: Database does not exist \n Expected 'D:/coredb/' at 'D:/'");
    }
  },
  deleteDb: (name) => {
    if (fs.existsSync('D:/coredb/')) {
      if (fs.existsSync(`D:/coredb/${name}.json`)) {
        fse.remove(`D:/coredb/${name}.json`);
        console.log('Database deleted successfully!');
     } else {
         console.log(`[ERROR]: Database doesn't exist 500`);
     }
    } else {
      console.log("[ERROR]: Database does not exist \n Expected 'D:/coredb/' at 'D:/'")
    }
  },
add: (name, id, value) => {
  if (fs.existsSync('D:/coredb/')) {
    var userJson = JSON.parse(fs.readFileSync(`D:/coredb/${name}.json`));
    var ide = `${id}`;
    const val = `${value}`;
    userJson[`${ide}`] = {
           value: val
    }
  
    fs.writeFileSync(`D:/coredb/${name}.json`, JSON.stringify(userJson));
  } else {
    console.log("[ERROR]: Database does not exist \n Expected 'D:/coredb/' at 'D:/'")
  }
},
read: (name, id) => {
  if (fs.existsSync('D:/coredb/')) {
    var jsonData = JSON.parse(fs.readFileSync(`D:/coredb/${name}.json`));
    var idGiven = `${id}`;
    console.log(jsonData[`${idGiven}`].value);
  }
  else 
  {
      console.log("[ERROR]: Database does not exist \n Expected 'D:/coredb/' at 'D:/'")
  }
},
remove: (name, id) => {
  if (fs.existsSync('D:/coredb/')) {
    var jsonData = JSON.parse(fs.readFileSync(`D:/coredb/${name}.json`));
    var idGiven = `${id}`;
   const keys = Object.keys(jsonData);
  
      if (keys.includes(`${id}`)) {
        console.log(jsonData);
        delete jsonData.samu;
        console.log(jsonData);
        fs.writeFileSync(`D:/coredb/${name}.json`, JSON.stringify(jsonData))
        
      } else {
         console.log(false);
      }
  } else {
    console.log("[ERROR]: Database does not exist \n Expected 'D:/coredb/' at 'D:/'");
  }
},
readWholeDb: (name) => {
     if (fs.existsSync('D:/coredb/')) {
      var all = JSON.parse(fs.readFileSync(`D:/coredb/${name}.json`));
      console.table(all);
     } else {
           console.log("[ERROR]: Database does not exist \n Expected 'D:/coredb/' at 'D:/'")
     }
}
}

exports = module.exports = db;  

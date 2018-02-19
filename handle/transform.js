const fs = require('fs');
const path = require('path');
const transform  = require('../transform');
let filePath = path.resolve(__dirname, '../src/');

const findJFile = (filePath) => {
  const files = fs.readdirSync(filePath);
  files.forEach(file => {
    if (!/\./.test(file)) {
      let childrenPath = `${filePath}/${file}`;
      findJFile(childrenPath);
    }
    if (/\.js/.test(file)) {
      transform(`${filePath}/${file}`)
    }
  })
}

findJFile(filePath)

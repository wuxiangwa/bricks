const fs = require('fs');
const path = require('path');

const variablesPath = process.argv;
console.log(variablesPath)
return
// let filePath = path.resolve(__dirname, './src/components/layout/Levelbar.js');
let filePath = path.resolve(__dirname, './src/Views/ui/Typography.js');

let fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
let newFileContent = fileContent.replace(new RegExp('\className={([^\{}]*)}', "g"), (matched) => {
  matched = matched.replace(new RegExp('{', "g"), (matchedChild) => {
    return '';
  })
  matched = matched.replace(new RegExp('}', "g"), (matchedChild) => {
    return '';
  })
  return matched;
});


fs.writeFileSync(filePath,
  newFileContent
);

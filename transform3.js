const fs = require('fs');
const path = require('path');

let filePath = path.resolve(__dirname, './src/Views/ui/Form.js');
const transform = (filePath) => {

  let fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  fileContent = fileContent.replace(new RegExp('\className="([^\"]*)\"', "g"), (matched) => {
    console.log(matched)
    matched = matched.replace(new RegExp("\f[^/a]\a", "g"), (matchedChild) => {
      console.log('matchedChild:', matchedChild)
      // return "className=";
    });

    return matched;
  });

  // fs.writeFileSync(filePath,
  //   fileContent
  // );
}

transform(filePath)

module.exports = transform

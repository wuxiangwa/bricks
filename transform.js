const fs = require('fs');
const path = require('path');

// let filePath = path.resolve(__dirname, './src/Views/ui/Form.js');
const transform = (filePath) => {

  let fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  fileContent = fileContent.replace(new RegExp('\class="([^\"]*)\"', "g"), (matched) => {
    matched = matched.replace(new RegExp(/class=/, "g"), (matchedChild) => {
      return "className=";
    });
    // matched = matched.replace(new RegExp('\"([^\"]*)\"', "g"), (matchedChild) => {
    //   return `${matchedChild}`;
    // })
    return matched;
  });

  // fileContent = fileContent.replace(new RegExp('\<input([^\>]*)', "g"), (matched) => {
  //   return `${matched} /`
  //
  // })

  fs.writeFileSync(filePath,
    fileContent
  );
}

// transform(filePath)

module.exports = transform

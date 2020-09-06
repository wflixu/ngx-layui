const less = require('less');

const fs = require('fs')

fs.readFile('./components/style/entry.less', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
  less.render(data, function (e, output) {
    console.log(output);
  });
})



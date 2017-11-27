var express = require('express');
var formidable = require('express-formidable');
var path = require('path');
var app = express();

app.use(formidable());

app.get('/', function (req, res) {
  console.log('get to root')
   res.sendFile(path.join(__dirname,'pets.html'))
})

app.post('/', function (req, res) {
  console.log('post /')
  console.log(req.fields);
 fs.writeFile('path.join(__dirname,"data.json"));in

   res.send('Hello World');
})

app.listen(8081, function () {
  console.log('listening on 8081')
})

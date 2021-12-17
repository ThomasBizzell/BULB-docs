const express = require('express'); 
const path = require('path');
const enforce = require('express-sslify');
const app = express();
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.secure) 
      return next();

  var target = url.format({
      protocol: 'https:',
      host: req.hostname,
      pathname: req.url
  });

  res.redirect(301, target);
});

app.use(express.json());

// Your static site folder name
app.use(express.static(path.join(__dirname + '/build')));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/build/index.html'));
  });

app.listen(port, ()=>{
    console.log("server is running on "+port)
})
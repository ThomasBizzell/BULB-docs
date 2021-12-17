import sslRedirect from 'heroku-ssl-redirect';

const express = require('express'); 
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(sslRedirect());
app.use(express.json());

// Your static site folder name
app.use(express.static(path.join(__dirname + '/build')));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/build/index.html'));
  });

app.listen(port, ()=>{
    console.log("server is running on "+port)
})
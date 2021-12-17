const express = require('express'); 
const path = require('path');
const enforce = require('express-sslify');
const app = express();
const port = process.env.PORT || 3000;

app.use(enforce.HTTPS());
app.use(express.json());

// Your static site folder name
app.use(express.static("build"));

app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/build/index.html'));
  });

app.listen(port, ()=>{
    console.log("server is running on "+port)
})
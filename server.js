const express = require('express'); 
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Your static site folder name
app.use(express.static("build"));

app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/build/index.html'));
  });

app.get('*',function (req, res) {
    res.redirect('https://docs.bulbapp.io' + req.url);
});

app.listen(port, ()=>{
    console.log("server is running on "+port)
})
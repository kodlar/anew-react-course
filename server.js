var express = require('express')


var app = express();

app.use(express.static('public'));

app.listen(3001,function(){
    console.log('express server is up on port 3001');
});


const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.listen(app.get('port'), function() {
console.log('Node app is running on port', app.get('port'));
});

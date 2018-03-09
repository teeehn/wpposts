const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.listen(PORT, function() {
    console.log('Node app is running on port ${PORT}');
});

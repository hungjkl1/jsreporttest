const express = require('express');
const app = express();
app.use('/', require('./test'));

const port = process.env.PORT || 5000;  
app.listen(port, () => {
    console.log('Connected to server on ' + port)
})
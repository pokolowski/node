const express = require("express");
const helmet = require("helmet");
const bodyParser = require('body-parser');
const app = express();
const port = 3000

app.use(helmet());

app.get('/', function (req, res) {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/soap', function (req, res){
    res.send('This is soap')
})

app.post('/rest', function (req, res){
    res.send('This is rest')
})
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
// app.set('views', __dirname + '/dist');
const VIEWS = path.join(__dirname, 'dist');

app.set('view engine', 'html');

app.get("/", (req, res) => {
    return res.sendFile('index.html', { root : VIEWS });
});

app.get("**", (req, res) => {
    return res.sendFile('index.html', { root : VIEWS });
});

// app.use('/src/assets', express.static(__dirname + '/src/assets/'));


app.listen(process.env.PORT || 8080);
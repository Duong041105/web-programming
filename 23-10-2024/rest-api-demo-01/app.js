const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, () => {
    console.log('Server is running at http://locahost:${port');
});

app.get('/user', (req, res) => {
    res.json([
        { id: 1,name: 'Namngu'},
        { id: 2, name:'Duongdzai'}
    ]);
} );
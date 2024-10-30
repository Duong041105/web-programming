const express = require('express');
const app = express();
const port = 3000;
const todosRouter = require('./src/routers/todos');
app.use(express.json());



app.get('/', (req, res ) => {
    res.send('hello worldddd');
})

app.use('/todo', todosRouter); 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 

app.use('/todo', todosRouter);
const express = require('express');

const app = express();

app.use(express.static('public'));

//routes
app.use('/imagenes',require('./routes/imagen'));

app.listen(3000, ()=>{
    console.log('Server Esuchando el puerto 3000');
});
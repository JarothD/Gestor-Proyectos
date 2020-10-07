const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json ({ extended: true }));


// Puerto de la app
//const port = process.env.port || 5000;
app.listen(process.env.PORT || 5000);

// Importar Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));
// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`)
}); 
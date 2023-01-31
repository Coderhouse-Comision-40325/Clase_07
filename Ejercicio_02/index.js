// Instanciar nuestras dependencias
import express from "express";
const app = express();

// Determinar las rutas del servidor
app.get('/bienvenida', (req, res) => {
    res.send(`<html><body><p style="color: blue">¡Bienvenide!</p></body></html>`)
})

app.get('/usuario', (req, res) => {
    const usuario = {nombre: 'Juan', apellido: 'Perez', edad: 30, correo: 'juanpablorom@gmail.com' };
    res.send(usuario)
})

// Configuracion del servidor
const port = 8080;
app.listen(port, () => {
    console.log('Servidor escuchando en el puerto: ', port)
});
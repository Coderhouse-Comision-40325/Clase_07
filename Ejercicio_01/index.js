// Importar nuestras dependencias
import express from "express"

// Instanciar nuestras constantes
const app = express();
const frase = "Hola Mundo, ¿cómo están?"

// Responder con la frase.
app.get('/api/getFrase', (req, res) => {
    res.send(frase)
})

// Vamos a traer una letra de la frase por su posición númerica
app.get('/api/getLetra/:num', (req, res) => {
    let num = parseInt(req.params.num)

    if((!isNaN(num))) {
        if(num >= 1 && num <= frase.length){
            res.send(frase[num-1])
        } else {
            res.send({ error: "El parametro esta fuera de rango"})
        }
    } else {
        res.send({error: "El parametro ingresado no es un numero"})
    }
})

//Vamos a traernos una palabra por su posición númerica
app.get('/api/getPalabra/:num', (req, res) => {
    let num = parseInt(req.params.num)

    if((!isNaN(num))) {
        let palabras = frase.split(' ')
        if(num >= 1 && num <= frase.length){
            res.send(palabras[num-1])
        } else {
            res.send({ error: "El parametro esta fuera de rango"})
        }
    } else {
        res.send({error: "El prametro ingresado no es un numero"})
    }
})

// Configurar nuestro servidor
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto: ', PORT)
})
server.on('error', error => console.log('Error en el servidor: ', error))
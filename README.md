1-npm init --y
2-npm install express --save
3-npm i cors dotenv multer -S
4-.gitignore
5-app.js y relacionamos la estructura básica para probar todo así:

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const port = 3000

app.listen(port, ()=>{
    console.log(`Api ejecutandose en: http:localhost+${port}`)
})

6-creamos el .env y .env.example y relacionamos las variables de entorno del proyecto
7-Ahora instanciamos require('dotenv').config() y reemplacemos el valor de port por:
const port = process.env.PORT || 3000

8-Scaffold es la estructura del proyecto, por eso trabajermos bajo MVC

donde models es la capa de modelo, donde controllers son los controladores y donde routes hace las veces de vistas.
Adicionalmente cree los siguientes directorios:
config que contedrá configuraciones propias y de paquetes externos
utils que contendrá funciones tipo helpers o ayudas internas
storage que contendrá archivos que se almacenarán

9-Es el momento de generar un repositorio local con git init
10- Instalamos ahora el paquete de mong con npm i mongoose
11- Dentro de config cree el archivo mongo.js donde se seteará la conexión a BD así:

const mongoose = require('mongoose');

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('****CONEXIÓN ESTABLECIDA****');
    } catch (err) {
        console.log('++++ERROR DE CONEXIÓN++++');
    }
};

module.exports = dbConnect;

    
12-Ahora requiera dicha conexión dentro del app.js




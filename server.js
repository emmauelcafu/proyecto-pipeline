// import  {createServer} from 'node:http';
const express= require('express');
const {sequelize} =require ('./config/connectDatabase');
const { jwtMiddleware } =require('./auth/jwt');
const { CreateUser } =  require('./controller/ControllerCreateUser');

const PORT = 3001 ;
const app = express();



app.get('/createUser',CreateUser)


app.get('/hello', jwtMiddleware, (req, res) => {
    res.send('hello world');
});

app.delete('/hello/:name',(req,res)=>{
    res.send(`goodbye: ${req.params.name}`)
})
app.use((err,req,res,next)=> {
    console.error(err.stack);
    res.status(500).send('sommething broke!');
    /*
    this middleware  catches errors and sends a 500 status code 
    
    */
})

sequelize.sync()
    .then(() => {
        console.log("✅ Base de datos sincronizada con Sequelize");
        app.listen(PORT, '127.0.0.1', () => {
            console.log(`🚀 Servidor escuchando en http://127.0.0.1:${PORT}`);
        });
    })
    .catch(err => console.error("❌ Error al sincronizar la base de datos:", err));



// app.listen(PORT,'127.0.0.1',()=>{
//     console.log('Listening on 127.0.0.1:3000')

// })

// First, install express and nodemon with npm i express nodemon.
// Then, run the server with npm run dev or npm start.
// Import express from 'express'.
// I add a constant called app that is an instance of express.
// Then, I add a route to the app that listens for GET requests on /hello. This is an endpoint.
// The method app.get() has two parameters: the first one is the path of the endpoint and the second one is a callback function that has two parameters.
// It returns the response to the client: "hello world".
// Then finally, I add a listen method to the app that has three parameters: the first one is the port, the second one is the host, and the third one is a callback function that is called when the server is started.


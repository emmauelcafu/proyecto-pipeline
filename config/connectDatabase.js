import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/practic_english');

sequelize.authenticate()
    .then(() => console.log("¡Conexión exitosa con PostgreSQL! 🚀"))
    .catch(error => console.error("Error de conexión:", error));


/*
    this is a simple connection to a postgres database using sequalize.
    1. install Sequalize with a command like npm install sequelize pg pg-hstore.
    2. import sequelize from 'sequelize'.
    3. create a new instance for conection to the databese name practic_english with the user postgres and password admin.
    4. then, used the authenticate method function to test if the connection is successful.
    5.  remember export the new instance of sequialize, 
    6. finally, I import to sequalize in server.js file,and also I use the metho sequelize.sync() that will create a message in the console '✅ Base de datos sincronizada con Sequelize' if the connection is successful, or if there is an error, it will show '❌ Error al sincronizar la base de datos:' with the error message. 
*/

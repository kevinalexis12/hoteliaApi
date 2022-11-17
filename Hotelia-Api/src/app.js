const expres=require('express');
const conexionBD =require('./db');

const app=expres();
require('dotenv').config();
//connecion a la base de datos 
conexionBD();
//configuraciones basicas 

app.set("name","api-hotelia");
app.set("port",process.env.PORT || 3000);
app.set("host",process.env.HOST || 'localhost');
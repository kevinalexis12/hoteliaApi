const mongoose= require('mongoose');
const conexionBD = async() =>{
    const url=`mongodb+srv://${process.env}:${process.env}@cluster1.wmaaest.mongodb.net/${process.env.BDname}?retryWrites=true&w=majority`;
    try {
        const DB=await mongoose.connection(url);
        console.log("conexion satisfactoria",DB.connection.name);
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=conexionBD;
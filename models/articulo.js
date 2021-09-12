import mongoose, { Schema } from "mongoose";

const articuloSchema = new Schema({

    titulo: {type: String, maxlength:200},
    extracto: {type: String, maxlength: 250},
    fecha: {type: Date},
    texto: {type: String},
    thumb: {type: String, maxlength: 50},
    
});

const Articulo = mongoose.model('articulo', articuloSchema);

export default Articulo; 
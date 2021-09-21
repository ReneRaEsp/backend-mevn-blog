import mongoose, { Schema } from "mongoose";

const articuloSchema = new Schema({

    titulo: {type: String, maxlength:200, required: true},
    extracto: {type: String, maxlength: 250, required: true},
    fecha: {type: Date, default: Date.now},
    texto: {type: String, required: true},
    thumb: {type: String, maxlength: 50, required: true},
    
});

const Articulo = mongoose.model('articulo', articuloSchema);

export default Articulo; 
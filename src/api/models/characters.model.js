const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const charactersSchema = new Schema(
    {
        nombre:{type:String,required:true},
        actor: {type: String},
        actriz: {type: String},
        rol:{type:String, required:true},
        aliados: {type:Array,required:true},
        enemigos: {type:Array,required:true},
        descripcion: {type:Array, required: true},
        picture: {type: String, required: true}
    },{
        timestamps:true
    }
)

const Character = mongoose.model("character", charactersSchema);

module.exports = Character;

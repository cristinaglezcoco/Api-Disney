const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moviesSchema = new Schema(
  {
    titulo: { type: String, required: true },
    año: { type: Number, required: true },
    genero: {type: String, default: "Animación"
    },
    director: { type: String, required: true },
    sinopsis: { type: String, required: true },
    personajes: [{type:Schema.Types.ObjectId,ref:"character"}],
    picture: {type:String}
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("movie", moviesSchema);

module.exports = Movie;

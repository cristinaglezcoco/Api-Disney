const Character = require("../models/characters.model");
const Movie = require("../models/movies.model");

const getMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find().populate('personajes'); //meter personajes en su película
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postMovies = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: "El id de la película no existe" });
    }
    return res.status(200).json(deletedMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//TODO: AÑADIR PERSONAJES A MOVIES

const putMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const putMovie = new Movie(req.body);
    putMovie._id = id;

    const updatedMovie = await Movie.findByIdAndUpdate(id, putMovie, {
      new: true,
    });
    if (!updatedMovie) {
      return res.status(404).json({ message: "El id de este personaje no existe" });
    }
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putPhotoMovies = async (req, res) => {
  try {
    const movieId = req.params.id; // Obtén el ID de la película de los parámetros de ruta
    const moviePicture = req.file_url ? req.file_url : null; // Verifica si hay una URL de imagen

    const updatedMovie = await Movie.findByIdAndUpdate(movieId, { picture: moviePicture }, { new: true });

    if (!updatedMovie) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }

    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getMovies, postMovies, deleteMovies, putMovies, putPhotoMovies };

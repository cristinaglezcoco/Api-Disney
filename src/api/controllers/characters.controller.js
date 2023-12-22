const Character = require("../models/characters.model");

const getCharacters = async (req, res) => {
  try {
    const allCharacters = await Character.find(); //personajes en movies
    return res.status(200).json(allCharacters);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// const getIdCharacters = async (req, res) => {
//   try {
//       const character = await Character.findById(req.params.id).populate('personajes').populate('villanos');
//       if (!videojuego) {
//           return res.status(404).json({ message: 'Videojuego no encontrado' });
//       }
//       return res.status(200).json(videojuego);
//   } catch (err) {
//       next(err);
//   }
// });

const postCharacters = async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    const createdCharacter = await newCharacter.save();
    return res.status(201).json(createdCharacter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacters = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCharacter = await Character.findByIdAndDelete(id);
    if (!deletedCharacter) {
      return res.status(404).json({ message: "El id del personaje no existe" });
    }
    return res.status(200).json(deletedCharacter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putCharacters = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharacter = new Character(req.body);
    putCharacter._id = id;

    const updatedCharacter = await Character.findByIdAndUpdate(id, putCharacter, {
      new: true,
    });
    if (!updatedCharacter) {
      return res.status(404).json({ message: "El id de este personaje no existe" });
    }
    return res.status(200).json(updatedCharacter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putPhotoCharacters = async (req, res) => {
  try {
    const characterId = req.params.id; // Obtén el ID de la película de los parámetros de ruta
    const characterPicture = req.file_url ? req.file_url : null; // Verifica si hay una URL de imagen

    const updatedCharacter = await Character.findByIdAndUpdate(characterId, { picture: characterPicture }, { new: true });

    if (!updatedCharacter) {
      return res.status(404).json({ error: 'Personaje no encontrada' });
    }

    return res.status(200).json(updatedCharacter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getCharacters, postCharacters, deleteCharacters, putCharacters, putPhotoCharacters };

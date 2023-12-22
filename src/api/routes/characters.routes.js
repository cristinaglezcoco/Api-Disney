const express = require("express");
const {getCharacters,postCharacters,deleteCharacters,putCharacters, putPhotoCharacters} = require("../controllers/characters.controller")
const charactersRouter = express.Router();

const { uploadToCloudinary } = require('../middleware/file.middleware');
const {upload} = require('../middleware/file.middleware');

charactersRouter.get("/",getCharacters)
charactersRouter.post("/",postCharacters)
charactersRouter.delete("/:id",deleteCharacters)
charactersRouter.put("/:id",putCharacters)
charactersRouter.put("/add-photo/:id", [upload.single('picture'), uploadToCloudinary], putPhotoCharacters)

module.exports = charactersRouter;
const express = require("express");
const {getMovies, postMovies, deleteMovies, putMovies, putPhotoMovies} = require("../controllers/movies.controller");

const moviesRouter = express.Router();
const { uploadToCloudinary } = require('../middleware/file.middleware');
const {upload} = require('../middleware/file.middleware');

moviesRouter.get("/",getMovies)
moviesRouter.post("/",postMovies)
moviesRouter.delete("/:id",deleteMovies)
moviesRouter.put("/:id",putMovies)
moviesRouter.put("/add-photo/:id", [upload.single('picture'), uploadToCloudinary], putPhotoMovies)

module.exports = moviesRouter;
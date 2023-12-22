const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const moviesRouter = require("./src/api/routes/movies.routes");
const charactersRouter = require("./src/api/routes/characters.routes")

const {connect} = require("./src/utils/db");
const PORT = process.env.PORT;

const server = express();
connect();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.use("/movies", moviesRouter);
server.use("/characters", charactersRouter);

server.listen(PORT, () => console.log(`escuchando en el puerto: http://localhost:${PORT}`))
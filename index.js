const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const moviesRouter = require("./src/api/routes/movies.routes");
const charactersRouter = require("./src/api/routes/characters.routes")
const userRouter = require ("./src/api/routes/user.routes")

const {connect} = require("./src/utils/db");
const PORT = process.env.PORT;

const server = express();
connect();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.use("/movies", moviesRouter);
server.use("/characters", charactersRouter);
server.use("/users", userRouter);

server.listen(PORT, () => console.log(`escuchando en el puerto: http://localhost:${PORT}`))
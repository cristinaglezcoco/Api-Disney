const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Movie = require("../api/models/movies.model");

const MONGODB_URL = process.env.MONGODB_URL;


//Añadir: tiana y el sapo
const movies = [
  {
    titulo: "Blancanieves y los siete enanitos",
    año: 1937,
    genero: "Animación",
    director: "David Hand",
    sinopsis:
      "Blancanieves escapa de su malvada madrastra y encuentra refugio con siete enanitos. Envenenada por una manzana, solo un beso de amor verdadero la despierta, rompiendo el hechizo y trayendo la felicidad al reino.",
  },
  {
    titulo: "Cenicienta",
    año: 1950,
    genero: "Animación",
    director: "Clyde Geronimi, Wilfred Jackson, Hamilton Luske",
    sinopsis:
      "Cenicienta, maltratada por su madrastra y hermanastras, recibe la ayuda de su hada madrina para asistir al baile real y conocer al príncipe.",
  },
  {
    titulo: "La Bella y la Bestia",
    año: 1991,
    genero: "Animación",
    director: "Gary Trousdale, Kirk Wise",
    sinopsis:
      "Bella se ofrece a cambiar su libertad por la de su padre, capturado por una bestia encantada. A medida que la relación entre ambos florece, descubren el amor verdadero.",
  },
  {
    titulo: "El Rey León",
    año: 1994,
    genero: "Animación",
    director: "Roger Allers, Rob Minkoff",
    sinopsis:
      "Simba, un león cachorro, huye tras la muerte de su padre Mufasa. Regresa para reclamar su lugar como rey, enfrentándose a su tío Scar.",
  },
  {
    titulo: "La Sirenita",
    año: 1989,
    genero: "Animación",
    director: "Ron Clements, John Musker",
    sinopsis:
      "Ariel, una sirena, sueña con vivir en la tierra y se enamora de un príncipe humano. Hace un trato con Úrsula, la bruja del mar, pero las cosas se complican.",
  },
  {
    titulo: "Pinocho",
    año: 1940,
    genero: "Animación",
    director: "Ben Sharpsteen, Hamilton Luske",
    sinopsis:
      "Pinocho, un títere de madera, cobra vida y emprende una serie de aventuras para convertirse en un niño real, enfrentando desafíos que prueban su valentía.",
  },
  {
    titulo: "Dumbo",
    año: 1941,
    genero: "Animación",
    director: "Ben Sharpsteen",
    sinopsis:
      "Dumbo, un elefante con orejas grandes, es ridiculizado pero descubre que puede volar. Su historia resalta la superación de la discriminación.",
  },
  {
    titulo: "Bambi",
    año: 1942,
    genero: "Animación",
    director: "David Hand",
    sinopsis:
      "Bambi, un joven ciervo, experimenta la amistad y la pérdida en el bosque mientras crece y asume su papel como príncipe del bosque.",
  },
  {
    titulo: "Peter Pan",
    año: 1953,
    genero: "Animación",
    director: "Clyde Geronimi, Wilfred Jackson, Hamilton Luske",
    sinopsis:
      "Peter Pan lleva a Wendy y sus hermanos a Nunca Jamás, donde enfrentan a Campanita, el Capitán Garfio, y descubren la magia de la eterna juventud.",
  },
  {
    titulo: "La Dama y el Vagabundo",
    año: 1955,
    genero: "Animación",
    director: "Clyde Geronimi, Wilfred Jackson, Hamilton Luske",
    sinopsis:
      "La Dama, una perrita mimada, se enamora del Vagabundo, un perro callejero. Juntos viven una romántica historia canina.",
  },
  {
    titulo: "101 Dálmatas",
    año: 1961,
    genero: "Animación",
    director: "Clyde Geronimi, Hamilton Luske, Wolfgang Reitherman",
    sinopsis:
      "Pongo y Perdita, junto con sus cachorros, luchan contra Cruella de Vil, quien quiere hacer abrigos de piel de dálmata. Una aventura canina llena de intriga y valentía.",
  },
  {
    titulo: "La Bella Durmiente",
    año: 1959,
    genero: "Animación",
    director: "Les Clark, Eric Larson, Wolfgang Reitherman",
    sinopsis:
      "La princesa Aurora es maldecida por la malvada bruja Maléfica y cae en un sueño profundo. Solo el beso de amor verdadero puede despertarla y romper el hechizo.",
  },
  {
    titulo: "La Cenicienta",
    año: 2015,
    genero: "Fantasía",
    director: "Kenneth Branagh",
    sinopsis:
      "Cenicienta, maltratada por su madrastra y hermanastras, recibe la ayuda de su hada madrina para asistir al baile real y conocer al príncipe en esta adaptación de acción en vivo.",
  },
  {
    titulo: "El Libro de la Selva",
    año: 1967,
    genero: "Animación",
    director: "Wolfgang Reitherman",
    sinopsis:
      "Mowgli, un niño criado por lobos, se embarca en un viaje en la selva junto a sus amigos Bagheera y Baloo. Enfrenta al feroz tigre Shere Khan y descubre su verdadero hogar.",
  },
  {
    titulo: "Aladdín",
    año: 1992,
    genero: "Animación",
    director: "Ron Clements, John Musker",
    sinopsis:
      "Aladdín, un joven callejero, encuentra una lámpara mágica con un genio que concede tres deseos. Se enamora de la princesa Jasmine y enfrenta al malvado Jafar en la ciudad de Agrabah.",
  },
  {
    titulo: "Mulán",
    año: 1998,
    genero: "Animación",
    director: "Tony Bancroft, Barry Cook",
    sinopsis:
      "Mulan se disfraza de hombre para unirse al ejército chino en lugar de su padre enfermo. A través de la valentía y la astucia, Mulán demuestra que las mujeres también pueden ser guerreras.",
  },
  {
    titulo: "Hércules",
    año: 1997,
    genero: "Animación",
    director: "Ron Clements, John Musker",
    sinopsis:
      "Hércules, un semidiós, emprende un viaje para convertirse en un verdadero héroe y recuperar su lugar en el Monte Olimpo. Enfrenta desafíos, descubre el amor y supera a los dioses del Olimpo.",
  },
  {
    titulo: "Tarzán",
    año: 1999,
    genero: "Animación",
    director: "Kevin Lima, Chris Buck",
    sinopsis:
      "Tarzán, criado por gorilas, se encuentra con humanos y descubre sus orígenes. Junto a Jane, enfrenta amenazas y protege la jungla. Una historia de aventuras y descubrimientos.",
  },
  {
    titulo: "Frozen: El reino del hielo",
    año: 2013,
    genero: "Animación",
    director: "Chris Buck, Jennifer Lee",
    sinopsis:
      "Elsa, con poderes de hielo, y su hermana Anna, se embarcan en una aventura para salvar Arendelle. Con canciones icónicas, Frozen celebra el amor fraternal y rompe con los estereotipos.",
  },
  {
    titulo: "Enredados",
    año: 2010,
    genero: "Animación",
    director: "Nathan Greno, Byron Howard",
    sinopsis:
      "Rapunzel, una joven con un largo cabello mágico, escapa de su torre con Flynn Rider. Juntos, enfrentan desafíos y descubren la verdad sobre el pasado de Rapunzel.",
  },
  {
    titulo: "Mary Poppins",
    año: 1964,
    genero: "Musical, Fantasía",
    director: "Robert Stevenson",
    sinopsis:
      "Mary Poppins, una niñera mágica con descripcion extraordinarias, llega a la familia Banks para cuidar de los niños y llevarlos a vivir fantásticas aventuras. Con su bolso mágico y su sombrilla voladora, Mary Poppins trae alegría y magia a la vida de los Banks, enseñándoles importantes lecciones sobre la familia y la imaginación.",
  },
  {
    titulo: "Moana",
    año: 2016,
    genero: "Animación",
    director: "Ron Clements, John Musker",
    sinopsis:
      "Moana, una valiente navegante, se embarca en un viaje para salvar su isla. Con la ayuda del semidiós Maui, supera desafíos y restaura el equilibrio en el océano.",
  },
  {
    titulo: "Zootopia",
    año: 2016,
    genero: "Animación",
    director: "Byron Howard, Rich Moore",
    sinopsis:
      "Judy Hopps, una conejita policía, se asocia con un astuto zorro, Nick Wilde, para resolver un misterio en Zootopia. La película aborda temas de diversidad y superación de prejuicios.",
  },
  {
    titulo: "El Jorobado de Notre Dame",
    año: 1996,
    genero: "Animación",
    director: "Gary Trousdale, Kirk Wise",
    sinopsis:
      "Quasimodo, el campanero jorobado de Notre Dame, se embarca en una aventura para proteger a la gitana Esmeralda de la malvada figura del juez Frollo. Una historia de aceptación y justicia.",
  },
  {
    titulo: "El Planeta del Tesoro",
    año: 2002,
    genero: "Animación",
    director: "Ron Clements, John Musker",
    sinopsis:
      "Jim Hawkins, una joven intrépida, se embarca en una búsqueda espacial para encontrar un legendario tesoro. A bordo de la nave R.L.S. Legacy, enfrenta peligros y descubre secretos cósmicos.",
  },
  {
    titulo: "Atlantis: El Imperio Perdido",
    año: 2001,
    genero: "Animación",
    director: "Gary Trousdale, Kirk Wise",
    sinopsis:
      "Milo Thatch lidera una expedición a la legendaria Atlantis. Enfrentan criaturas misteriosas y descubren secretos perdidos mientras buscan el poderoso cristal que sostiene la ciudad.",
  },
  {
    titulo: "El Libro de la Selva (2016)",
    año: 2016,
    genero: "Aventura",
    director: "Jon Favreau",
    sinopsis:
      "Mowgli, criado por lobos, se aventura en la selva para escapar del tigre Shere Khan. Con la ayuda de Bagheera y Baloo, descubre su verdadero destino y enfrenta amenazas salvajes.",
  },
  {
    titulo: "El Regreso de Mary Poppins",
    año: 2018,
    genero: "Fantasía",
    director: "Rob Marshall",
    sinopsis:
      "Mary Poppins, la niñera mágica, regresa para ayudar a la nueva generación de la familia Banks a redescubrir la alegría y la maravilla perdidas en sus vidas. Con su encanto y magia, Mary Poppins transforma las travesuras cotidianas en aventuras extraordinarias.",
  },
  {
    titulo: "Alice in Wonderland",
    año: 2010,
    genero: "Aventura",
    director: "Tim Burton",
    sinopsis:
      "Alice, una joven inquieta, cae por el agujero de un conejo y llega a un mundo mágico y extravagante. Para derrocar a la Reina de Corazones, Alice emprende un viaje lleno de personajes peculiares y desafíos inesperados.",
  },
  {
    titulo: "Dumbo (2019)",
    año: 2019,
    genero: "Aventura",
    director: "Tim Burton",
    sinopsis:
      "Dumbo, un elefante con orejas grandes, descubre que puede volar. Sin embargo, enfrenta desafíos y prejuicios en un circo que lo ve como una rareza. Con la ayuda de amigos y su don único, Dumbo encuentra su verdadero lugar y la aceptación.",
  },
  {
    titulo: "Coco",
    año: 2017,
    genero: "Animación, Aventura, Comedia",
    director: "Lee Unkrich, Adrian Molina (co-director)",
    sinopsis:
      "Coco es una película de animación que sigue la historia de Miguel, un niño que aspira a ser músico a pesar de la prohibición de su familia. Durante el Día de los Muertos, Miguel se encuentra en la Tierra de los Muertos, donde descubre la verdad sobre su familia y su amor por la música.",
  },
  {
    titulo: "Frozen II",
    año: 2019,
    genero: "Animación",
    director: "Chris Buck, Jennifer Lee",
    sinopsis:
      "Elsa, acompañada de Anna, Kristoff, Olaf y Sven, se embarca en un viaje más allá de Arendelle para descubrir el origen de los poderes de Elsa y salvar su reino. En esta aventura llena de misterios, encuentran la verdad sobre el pasado y la fuerza del amor fraternal.",
  },
  {
    titulo: "Raya y el último dragón",
    año: 2021,
    genero: "Animación",
    director: "Don Hall, Carlos López Estrada",
    sinopsis:
      "Raya, una valiente guerrera, busca al último dragón para salvar su reino de una antigua oscuridad. En su viaje, forma una alianza improbable y descubre la importancia de la confianza y la unidad en la lucha contra las fuerzas del mal.",
  },
  {
    titulo: "Cruella",
    año: 2021,
    genero: "Crimen",
    director: "Craig Gillespie",
    sinopsis:
      "Cruella de Vil, una joven diseñadora de moda con un estilo único, lucha por abrirse camino en el mundo de la moda. A medida que descubre su verdadera identidad, Cruella abraza su creatividad y desafía las expectativas sociales, revelando la complejidad de su personaje icónico.",
  },
  {
    titulo: "Luca",
    año: 2021,
    genero: "Animación",
    director: "Enrico Casarosa",
    sinopsis:
      "Luca, un niño marino, experimenta un verano inolvidable en la costa italiana, donde descubre la amistad humana y los desafíos de ocultar su verdadera identidad. Con la ayuda de sus amigos, Luca abraza su autenticidad y rompe barreras, enseñando a todos la importancia de la aceptación.",
  },
];

mongoose
  .connect(MONGODB_URL)
  .then(async () => {
    const allMovies = await Movie.find();
    if (allMovies.length > 0) {
      await Movie.collection.drop();
      console.log("Películas borradas");
    }
  })
  .catch((error) => console.log("Error borrando las películas", error))
  .then(async () => {
    const movieMap = movies.map((movie) => new Movie(movie));
    await Movie.insertMany(movieMap);
    console.log("Películas insertadas");
  })
  .catch((error) => console.log("Error insertando las películas", error))
  .finally(() => mongoose.disconnect());

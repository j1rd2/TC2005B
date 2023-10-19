const PokemonModel = require('../models/pokemon.model');


exports.get_main = (request, response, next) => {
    response.render('main.ejs', {
        privilegios: request.session.privilegios || [],
    });
};

exports.get_noticias = (request, response, next) => {
    response.render('noticias.ejs');
};

exports.get_tour = (request, response, next) => {
    response.render('tour.ejs');
};

exports.get_vuelta = (request, response, next) => {
    response.render('vuelta.ejs');
};

exports.get_giro = (request, response, next) => {
    response.render('giro.ejs');
};

exports.getPokemon = async (request, response, next) => {
    try {
        const pokemonName = request.params.name; // Asumiendo que obtienes el nombre del Pokémon de la URL.
        const pokemonData = await PokemonModel.getPokemon(pokemonName);
        response.render('pokemon.ejs', { pokemon: pokemonData });
    } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
        response.status(500).send("Error al obtener el Pokémon");
    }
};


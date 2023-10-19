const axios = require('axios');

exports.getPokemon = async (name) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
        throw error;
    }
};

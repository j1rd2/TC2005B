class Pokemon {
    constructor(nombre, vida, ataque, tipo) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.tipo = tipo;
    }

    atacar(otroPokemon) {
        const damage = Math.floor(Math.random() * this.ataque);
        otroPokemon.recibirDanio(damage);
        return damage;
    }

    recibirDanio(danio) {
        this.vida -= danio;
        if (this.vida < 0) {
        this.vida = 0;
        }
    }
}

const charmander = new Pokemon("Charmander", 100, 20, "Fuego");
const squirtle = new Pokemon("Squirtle", 120, 18, "Agua");
const bulbasaur = new Pokemon("Bulbasaur", 110, 22, "Planta");

const pokemonSelect = document.getElementById("pokemonSelect");
const battleButton = document.getElementById("battleButton");
const battleResult = document.getElementById("battleResult");

battleButton.addEventListener("click", () => {
    const selectedPokemonName = pokemonSelect.value;
    let playerPokemon, enemyPokemon;

    switch (selectedPokemonName) {
        case "charmander":
            playerPokemon = charmander;
            break;
        case "squirtle":
            playerPokemon = squirtle;
            break;
        case "bulbasaur":
            playerPokemon = bulbasaur;
        break;
    }

    const remainingPokemons = [charmander, squirtle, bulbasaur].filter(pokemon => pokemon !== playerPokemon);
    enemyPokemon = remainingPokemons[Math.floor(Math.random() * remainingPokemons.length)];

    battleResult.innerHTML = ""; 

    while (playerPokemon.vida > 0 && enemyPokemon.vida > 0) {
    const damageToEnemy = playerPokemon.atacar(enemyPokemon);
    battleResult.innerHTML += `${playerPokemon.nombre} atacó a ${enemyPokemon.nombre} y causó ${damageToEnemy} puntos de daño.<br>`;
    
        if (enemyPokemon.vida <= 0) {
            battleResult.innerHTML += `${enemyPokemon.nombre} ha sido derrotado. ¡${playerPokemon.nombre} ganó la batalla!`;
        } else {
        const damageToPlayer = enemyPokemon.atacar(playerPokemon);
        battleResult.innerHTML += `${enemyPokemon.nombre} contraatacó a ${playerPokemon.nombre} y causó ${damageToPlayer} puntos de daño.<br>`;
    
        if (playerPokemon.vida <= 0) {
            battleResult.innerHTML += `${playerPokemon.nombre} ha sido derrotado. ¡${enemyPokemon.nombre} ganó la batalla!`;
            }
        }
    }
});
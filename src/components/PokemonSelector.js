import Pokemon from "./Pokemon"


function PokemonSelector(){
    return(
        <div id='SelectionScreen'>
            <div id="CharmanderSelector">
                <img src='https://img.pokemondb.net/sprites/black-white/normal/charmander.png'></img>
                <div>
                    <button className="Selector" id='CharmanderButton'>Charmander</button>
                </div>
            </div>
            <div id="SquirtleSelector">
                <img src='https://img.pokemondb.net/sprites/black-white/normal/squirtle.png'></img>
                <div>
                    <button className="Selector" id='SquirtleButton'>Squirtle</button>
                </div>
            </div>
            <div id='BulbasaurSelector'>
                <img src='https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png'></img>
                <div>
                    <button className="Selector" id='BulbasaurButton'>Bulbasaur</button>
                </div>
            </div>
        </div>
    )
}

export default PokemonSelector
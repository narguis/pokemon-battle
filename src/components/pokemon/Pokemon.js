

function Pokemon({pokemonname}){
    let all_pokemon = [
        {name: 'Charmander',
        types: ['fire'],
        img: "https://img.pokemondb.net/sprites/black-white/normal/charmander.png",
        hp: 282,
        atk: 223,
        def: 203,
        spa: 240,
        spd: 218,
        speed: 251},

        {name: 'Squirtle',
        types: ['water'],
        img: "https://img.pokemondb.net/sprites/black-white/normal/squirtle.png",
        hp: 292,
        atk: 214,
        def: 251,
        spa: 218,
        spd: 249,
        speed: 203},
    
        {name: 'Bulbasaur',
        types: ['grass', 'poison'],
        img: `https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png`,
        hp: 294,
        atk: 216,
        def: 216,
        spa: 251,
        spd: 251,
        speed: 207},
    ]

    let pokemon = all_pokemon.find(poke => poke.name.toLowerCase() === pokemonname.toLowerCase());

    let types_html = '';

    for(let i = 0; i < pokemon.types.length; i++){
        types_html += pokemon.types[i]
        if(i !== pokemon.types.length -1){
            types_html += ', '
        }
    }

    return(
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} height='300' width='300' className='pokemonimg' alt={pokemon.name} objectfit='cover'></img>
            <p>{types_html}</p>
            <progress value='100' max={pokemon.hp}></progress>
        </div>
    )
}

export default Pokemon
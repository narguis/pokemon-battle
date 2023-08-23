import Pokemon from "./Pokemon"
import styles from './PokemonSelector.module.css'


function PokemonSelector(){
    return(
        <div id={styles.SelectionScreen}>
            <div id={styles.CharmanderSelector}>
                <img src='https://img.pokemondb.net/sprites/black-white/normal/charmander.png' width='200' height='200'></img>
                <div>
                    <button className={styles.Selector} id={styles.CharmanderButton} >Charmander</button>
                </div>
            </div>
            <div id={styles.SquirtleSelector}>
                <img src='https://img.pokemondb.net/sprites/black-white/normal/squirtle.png' width='200' height='200'></img>
                <div>
                    <button className={styles.Selector} id={styles.SquirtleButton}>Squirtle</button>
                </div>
            </div>
            <div id={styles.BulbasaurSelector}>
                <img src='https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png' width='200' height='200'></img>
                <div>
                    <button className={styles.Selector} id={styles.BulbasaurButton}>Bulbasaur</button>
                </div>
            </div>
        </div>
    )
}

export default PokemonSelector
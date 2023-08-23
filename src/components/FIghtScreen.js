import styles from './FightScreen.module.css'
import Pokemon from './Pokemon'

function FightScreen(){
    return(
        <div id={styles.FightScreen}>
            {/* <h1>Round 1</h1> */}
            <div id={styles.Fight}>
                <div id={styles.YourPokemon}>
                    <Pokemon pokemonname='charmander'/>
                </div>
                <div id={styles.EnemyPokemon}>
                    <Pokemon pokemonname='squirtle'/>
                </div>
            </div>
        </div>
    )
}

export default FightScreen

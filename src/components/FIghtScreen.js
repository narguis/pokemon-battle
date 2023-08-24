import styles from './FightScreen.module.css'
import MoveButton from './MoveButton'
import Pokemon from './Pokemon'

function FightScreen(){
    return(
        <div id={styles.FightScreen}>
            {<h1>Round 1</h1>}
            <div id={styles.Fight}>
                <div id={styles.YourPokemon}>
                    <Pokemon pokemonname='charmander'/>
                    <div id={styles.YourMoves}>
                    <div>
                    <MoveButton move='Slash' pp={20}/>
                    <MoveButton move='Flare Blitz' pp={15}/>
                    </div>
                    <div>
                    <MoveButton move='Smokescreen' pp={20}/>
                    <MoveButton move='Flamethrower' pp={15}/>
                    </div>
                    </div>
                </div>
                <div id={styles.EnemyPokemon}>
                    <Pokemon pokemonname='squirtle'/>
                    <div id={styles.EnemyMoves}>
                    <div>
                    <MoveButton move='Skull Bash' pp={10}/>
                    <MoveButton move='Hydro Pump' pp={5}/>
                    </div>
                    <div>
                    <MoveButton move='Iron Defense' pp={15}/>
                    <MoveButton move='Rain Dance' pp={5}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FightScreen

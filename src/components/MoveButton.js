import styles from './FightScreen.module.css'

function MoveButton({move, pp, category}){

   let atk_moves = {move_name: 'Hydro Pump',
            move_type: 'water',
            category: 'special',
            power: 110,
            accuracy: 80,
            pp: 5,
            extra: false}

    let stat_moves = {move_name: 'Hydro Pump',
    move_type: 'water',
    category: 'special',
    power: 110,
    accuracy: 80,
    pp: 5,
    extra: false}



    return(
        <>
            { <button id={styles.MoveButton}><div>{move}</div><div style={{ fontSize: '1.2rem', position: 'absolute', bottom: 18, transform: 'translateY(100%)' }}>{pp} / {pp}</div></button>}
        </>
    )
}

export default MoveButton
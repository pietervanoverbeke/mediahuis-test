export function PokemonMoves(props) {
    return(
        <>
            <h3 style={{textAlign: 'center'}}>Selected Moves</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
               {props.moves.map((move, i) => {
                    return(
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            width: '47%',
                            border: 'solid',
                            margin: '0.5em 0'
                        }}> 
                            <h3>{move}</h3>
                            <button 
                                style={{
                                    textDecoration: 'underline',
                                    alignSelf: 'flex-start',
                                    color: '#fdcc07',
                                    border: 'none',
                                    background: 'none',
                                    cursor: 'pointer'
                                }}
                                onClick={() => {props.onRemoveMove(move)}}>
                                remove
                            </button>
                       </div>
                    )
               })} 
            </div>
        </>
    )
}
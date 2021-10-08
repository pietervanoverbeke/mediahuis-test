const cardStyle = {
    width: '16%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '10em',
    padding: '1em 0',
}

export function PokemonSquadCard(props) {
    const getPokemonColor = (types) => {
        switch(types[0].name.toLowerCase()) {
            case 'normal': return '#a8a77a';
            case 'fire': return '#ee8130';
            case 'water': return '#6390f0';
            case 'electric': return '#f7d02c';
            case 'grass': return '#7ac74c';
            case 'ice': return '#96d9d6';
            case 'fighting': return '#c22e28';
            default: return '#a8a77a';
        }
    }

    if (props.emptyCard) {
        return(
            <div style={{
                ...cardStyle,
                background: '#c1c8ca'
            }}>
                empty
            </div>
        )
    }

    return(
        <div 
            style={{
                ...cardStyle,
                background: getPokemonColor(props.types),
            }}
            onClick={() => {props.onRemoveFromSquad(props.name)}}
        >
            <img alt={props.name} src={props.img} />
            <h3 style={{color: '#fff'}}>{props.name}</h3>
            {props.selectedMoves.map(move => {
                return(
                    <div style={{
                        background: '#fff',
                        width: '80%',
                        color: '#3a5d9f',
                        padding: '0.5em',
                        margin: '0.5em 0',
                        borderRadius: '1em'
                    }}>
                        {move}
                    </div>
                )
            })}
        </div>
    )
}
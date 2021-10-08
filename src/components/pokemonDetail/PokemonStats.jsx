export function PokemonStats(props) {
    return(
        <>
            <h3 style={{textAlign: 'center'}}>Stats</h3>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {props.stats.map((stat) => {
                    return (
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            width: '50%'
                        }}>
                            <span style={{color: '#fdcc07', marginRight: '1em'}}>{stat.name}</span>
                            <span style={{fontSize: '2em', color: '#3a5d9f'}}>{stat.value}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export function PokemonAbilities(props) {
    return(
        <>
            <h3 style={{color: '#fdcc07'}}>Abilities</h3>
            {props.abilities.map((ability, index) => (
                <div 
                    key={index} 
                    onClick={() => props.onAbilityClick(ability.name)}
                    style={{cursor: 'pointer'}}
                >
                    {ability.name}
                </div>))}
        </>
    )
}
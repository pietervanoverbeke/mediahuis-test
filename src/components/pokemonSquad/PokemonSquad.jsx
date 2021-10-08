import { PokemonSquadCard } from "./PokemonSquadCard"

export function PokemonSquad(props) {

    const renderEmptyCards = () => {
        const remainingCards = 6-props.savedPokemon.length;
        let remainingHtml = [];
        for (let index = 0; index < remainingCards; index++) {
            remainingHtml.push(<PokemonSquadCard emptyCard={true}></PokemonSquadCard>);
        }
        return remainingHtml
    }

    return(
        <>
            <h3 style={{color: '#fdcc07'}}>Selected Squad</h3>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                {props.savedPokemon.map(pokemon => {
                    return(
                        <PokemonSquadCard
                            img={pokemon.image}
                            types={pokemon.types}
                            name={pokemon.name}
                            selectedMoves={pokemon.selectedMoves}
                            onRemoveFromSquad={props.onRemoveFromSquad}
                        ></PokemonSquadCard>
                    )
                })}
                {props.savedPokemon.length < 6 ? renderEmptyCards() : ''}
            </div>
        </>
    )
}
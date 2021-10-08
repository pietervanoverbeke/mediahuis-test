import { useQuery } from "graphql-hooks";
import { useEffect, useState } from "react";
import { PokemonAbilities } from "./PokemonAbilities";
import { PokemonMoves } from "./PokemonMoves";
import { PokemonStats } from "./PokemonStats";

export function PokemonDetail({pokemon, onSavePokemon}) {
    const {loading, error, data } = useQuery(
        `query Pokemon($name: String!){
            Pokemon(name: $name) {
                id
                name
                image
                abilities {
                    name
                }
                stats {
                    name
                    value
                }
                types {
                    name
                }
            }
        }`,
        {
            variables: {
                name: pokemon ? pokemon.name : ''
            }
        }
    )

    const [selectedMoves, setSelectedMoves] = useState([]);

    if (loading) {
        return 'loading pokemon detail.'
    }
    if (error) {
        if (pokemon) {
            return 'Something went wrong.';
        }
        return 'No pokemon selected.'
    }

    const savePokemon = () => {
        onSavePokemon({
            ...data.Pokemon,
            selectedMoves
        })
    }

    const handleAbilityClick = (ability) => {
        if (selectedMoves.length < 4) {
            if (selectedMoves.includes(ability)) {
                alert('You have already selected this move.')
            } else setSelectedMoves([...selectedMoves, ability]);
        } else {
            alert('You already have 4 moves selected.')
        }
    }

    const handleRemoveMove = (move) => {
        setSelectedMoves([...selectedMoves.filter(selectedMove => selectedMove !== move)])
    }

    return(
        <div style={{display: 'flex'}}>
            <div style={{width: '25%'}}>
                <img style={{width: '75%'}} src={data.Pokemon.image} alt={data.Pokemon.name} />
                <h1 style={{margin: 0, color: '#3a5d9f'}}>{data.Pokemon.name}</h1>
                <button style={{borderRadius: 0, background: '#3a5d9f', border: 'none', color: '#fff', fontSize: '1.5em', padding: '0.5em', cursor: 'pointer'}} onClick={savePokemon}>Save Pokemon</button>
            </div>
            <div style={{width: '50%', margin: '0 1em', color: '#3a5d9f'}}>
                <PokemonStats stats={data.Pokemon.stats}></PokemonStats>
                <PokemonMoves moves={selectedMoves} onRemoveMove={handleRemoveMove}></PokemonMoves>
            </div>
            <div style={{color: '#3a5d9f', display: 'flex', flexDirection: 'column', width: '25%'}}>
                <PokemonAbilities onAbilityClick={handleAbilityClick} abilities={data.Pokemon.abilities}></PokemonAbilities>
            </div>
        </div>
    );
}
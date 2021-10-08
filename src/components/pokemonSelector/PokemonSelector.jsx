import React, { useState } from 'react';
import DownShift from 'downshift';
import { useQuery } from 'graphql-hooks';
import { PokemonListItem } from './PokemonListItem';

export function PokemonSelector(props) {
    const { loading, error, data } = useQuery(
        `query Pokemons($first: Int){
            Pokemons(first: $first) {
                id
                name
            }
        }`,
        {
            variables: {
                first: 151
            }
        }
    );
    
    if (loading) {
        return 'Loading all Pokemons!'
    }
    if (error) {
        return 'something went wrong when loading all Pokemons'
    }

    return(
        <div style={{marginRight: '1em'}}>
            <h2 style={{color: '#fdcc07'}}>Select your Pokémon</h2>
            <DownShift
                onChange={selection => props.onPokemonSelect(selection)}
                itemToString={item => item ? item.name : ''}
                isOpen={true}
            >
                {({
                    getInputProps,
                    getItemProps,
                    getMenuProps,
                    isOpen,
                    inputValue,
                    highlightedIndex,
                    selectedItem,
                    getRootProps,
                    }) => (
                        <div style={{height: '45vh'}}>
                            <div
                            style={{display: 'inline-block', width: '100%', height: 'auto'}}
                            {...getRootProps({}, {suppressRefError: true})}
                            >
                                <input style={{borderWidth: '3px', borderColor: '#3a5d9f', width: '100%'}} placeholder="type to filter" {...getInputProps()} />
                            </div>
                            <ul style={{listStyleType: "none", padding: 0, overflow: "scroll", height: "90%"}} {...getMenuProps()}>
                            {isOpen
                                ? data.Pokemons
                                    .filter(item => !inputValue || item.name.includes(inputValue))
                                    .map((item) => (
                                        <PokemonListItem
                                            key={item.id}
                                            item={item} 
                                            highlightedIndex={highlightedIndex} 
                                            selectedItem={selectedItem}
                                            getItemProps={getItemProps}>
                                        </PokemonListItem>
                                    
                                    ))
                                : data.Pokemons.map(item => (
                                    <PokemonListItem
                                        key={item.id}
                                        item={item} 
                                        highlightedIndex={highlightedIndex} 
                                        selectedItem={selectedItem}
                                        getItemProps={getItemProps}>
                                    </PokemonListItem>
                                ))}
                            </ul>
                        </div>
                    )}
            </DownShift>
        </div>
    )
}
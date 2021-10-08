export function PokemonListItem (props){
    return(
        <li
            {...props.getItemProps({
            key: props.item.name,
            index: props.item.id,
            item: props.item,
            style: {
                backgroundColor:
                props.highlightedIndex === props.item.id ? 'lightgray' : '#3a5d9f',
                fontWeight: props.selectedItem === props.item ? 'bold' : 'normal',
                color: '#fdcc07',
                textAlign: 'center',
                borderRadius: '1em',
                padding: '0.5em',
                margin: '0.5em 0'
            },
            })}
        >
            {props.item.name}
        </li>
    );
}
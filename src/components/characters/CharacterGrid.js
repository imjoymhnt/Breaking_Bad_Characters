import React from 'react'
import Loader from '../ui/Loader'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? <Loader /> : <section className="cards">
        {items.map((item) => (
            <CharacterItem key={item.char_id} item={item} />
        ))}
    </section>
}

export default CharacterGrid

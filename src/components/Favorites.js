import { render } from '@testing-library/react'
import React from 'react'


const Favorites = (props) => {
    console.log(props)

    const listofFav = props.favorite.map(elem =>{
        return <div>{elem.description}</div>
    })
    return (
            <div>
                This is the favorites:
                {listofFav}
            </div>


    )

}

export default Favorites;
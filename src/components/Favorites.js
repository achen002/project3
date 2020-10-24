import { render } from '@testing-library/react'
import React from 'react'
import './Favorites.css'

import ResultCard from './ResultCard'


class Favorites extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            imageList : this.props.favorite,
            index : null
        }
    }

    onTitleClick = (cardIndex) => {
        this.setState({
            index: cardIndex
        })
        //console.log(cardIndex)
    }


    render() {

        //console.log(this.state.imageList)

    const listofFav = this.state.imageList.map(image =>{
        return  <ResultCard 
        key={image.id} 
        image={image}  
        onImgClick={this.onTitleClick} 
        imageId={image.id}
        addToFavorites={this.props.addToFavorites}
        isActive={this.state.index===image.id ? 'Active' : ''}
        
    />
    })

        return (
                    <div className="image-list">
                        {listofFav}
                    </div>


            )

    }
    

}

export default Favorites;
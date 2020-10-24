import { render } from '@testing-library/react'
import React from 'react'
import './Favorites.css'

import ResultCard from './ResultCard'


class Favorites extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            imageList : this.props.favorite,
            index : null,
            isFav : true,
        }
    }

    onTitleClick = (cardIndex) => {
        this.setState({
            index: cardIndex
        })
        //console.log(cardIndex)
    }


    render() {

        const divStyle = {
            textAlign : 'center',
            marginBottom : '25px'
        }

    const listofFav = this.state.imageList.map(image =>{
        return  <ResultCard 
        key={image.id} 
        image={image}  
        onImgClick={this.onTitleClick} 
        imageId={image.id}
        addToFavorites={this.props.addToFavorites}
        isFav={this.state.isFav}
        isActive={this.state.index===image.id ? 'Active' : ''}
        
    />
    })

        return (    
                    <div className="ui center aligned containter">

                        <div >
                            <h2 style={divStyle}>Favorite Images</h2>
                        </div>
                        
                            <div className="image-list">
                                {listofFav}
                            </div>

                    </div>
                    

            )

    }
    

}

export default Favorites;
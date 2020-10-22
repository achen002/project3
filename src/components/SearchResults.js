import React, {useState} from 'react'
import './SearchResults.css'
import ResultCard from './ResultCard'

class SearchResults extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
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
            //console.log(this.props)
           // const active = this.state.index === this.props.images.id ? 'Active' : '';

             const imageList = this.props.image.map(image =>{
             return <ResultCard 
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
                        {imageList}
                    </div>

                )

        }
    
}

export default SearchResults;
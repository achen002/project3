import React, {useState} from 'react'
import './SearchResults.css'
import ResultCard from './ResultCard'
import axios from 'axios'

class SearchResults extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            index : null,
            tempImages : []
        }

    }

    onTitleClick = (cardIndex) => {
        this.setState({
            index: cardIndex
        })
        //console.log(cardIndex)
    }

    componentDidMount() {
        if(this.props.image.length == 0) {
            axios.get('https://api.unsplash.com/photos/random', {
                params: {count : 10},
                headers: {
                    Authorization: `Client-ID gX8ZC8C_VxakJxZaRZre9btGZSOfq-h4zzEai1jLWsU`
                  }
            }).then(randomImages => {
                this.setState({
                    tempImages : randomImages.data
                })

            }).catch(err => {console.log(`Error getting random images: ${err}`)})

        }
    }



        render() {
           // console.log(this.props.image)
           // const active = this.state.index === this.props.images.id ? 'Active' : '';
           //console.log(this.state.tempImages)
           let imageList = [];
            if(this.props.image.length !=0) {
                 imageList = this.props.image.map(image =>{
                    return <ResultCard 
                                key={image.id} 
                                image={image}  
                                onImgClick={this.onTitleClick} 
                                imageId={image.id}
                                addToFavorites={this.props.addToFavorites}
                                isActive={this.state.index===image.id ? 'Active' : ''}
                                
                            />
                })

            } else {
                imageList = this.state.tempImages.map(tempImages => {
                    return <ResultCard 
                    key={tempImages.id} 
                    image={tempImages}  
                    onImgClick={this.onTitleClick} 
                    imageId={tempImages.id}
                    addToFavorites={this.props.addToFavorites}
                    isActive={this.state.index===tempImages.id ? 'Active' : ''}
                    
                />
                })

            }
            

           

            return (
                    <div className="image-list">
                        {imageList}
                    </div>

                )

        }
    
}

export default SearchResults;
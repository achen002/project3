import React from 'react'
import SearchResults from './SearchResults'
import SearchBar from './SearchBar';



const HomePage = (props) => {

   
//console.log(props)

    return(
        <div className="ui container">
            <h2>Image Search</h2>
            <SearchBar onSubmit={props.onSubmit} />
            <SearchResults image={props.images} addToFavorites={props.addToFav}/>
            
        </div>

    )
}



export default HomePage;
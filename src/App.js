import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Favorites from './components/Favorites'
import unsplash from './api/unsplash'
//import SearchResults from './components/SearchResults'
//import SearchBar from './components/SearchBar';
import HomePage from './components/HomePage'
import {Switch, Route} from 'react-router-dom';


function App() {
const [images, setImages] = useState([]);
const [favorites, setFavorites] = useState([]);


  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term},
    });

    setImages(response.data.results)
    //console.log(response);
  }

  const addToFavoritesList = (favorite) => {
    setFavorites(favorites);
   // console.log(favorites)
  }

  return (
    
    <div className="ui container">
      
      {/* <SearchBar onSubmit={onSearchSubmit}/>
      <SearchResults images={images}/> */}
      <Navbar />

      <Switch>
      <Route  exact path ='/' 
        render={() =>
          <HomePage onSubmit={onSearchSubmit} images={images} addToFavorites={addToFavoritesList}/>} 
          />

      <Route exact path ='/favorites' 
        render={()=>
          <Favorites favorite={favorites}/>}
          />


      </Switch>
    </div>
  );
}

export default App;

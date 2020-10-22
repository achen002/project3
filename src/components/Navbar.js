import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    return(
        <div className="ui secondary menu">
      
        <Link className="item" to='/'>Home</Link>
        <Link className="item" to='/favorites'>Favorites</Link>
        
      
    </div>
    )
}

export default Navbar;
import React from 'react'
import '../App';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>

       <div>
       <Link to="/"><h2>GreatReads</h2></Link>
        </div>

       <div>
        <Link to="/favorites"><p>Favorites</p></Link>
      </div>

        </div>
  )
}

export default Navbar
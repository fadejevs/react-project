import React from 'react'
import '../App';
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";



const Favorites = () => {

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are ", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };


  const navigate = useNavigate();


  return (
    <div className='favorites'>
      {favorites.length > 0 ? favorites.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h3>{book.title}</h3>
          </div>
          <div>
            <img src={book.image_url} alt="Book Image" onClick={()=> navigate(`/books/${book.id}`)}></img>
          </div>

          {favoritesChecker(book.id) ? (
            <div>
              <button onClick={() => removeFromFavorites(book.id)}>
                Remove From Favorites
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => addToFavorites(book)}>
                Add To Favorites
              </button>
            </div>
          )}

          
        </div>
      )): <h1>No favorites to show.</h1>}
    </div>
  )
}

export default Favorites
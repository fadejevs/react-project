import React from 'react'
import '../App';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BOOK_DETAILS_URL } from '../API';

const BookDetails = () => {

  const [book, setBook] = useState({});
  const {id} = useParams();

  useEffect(()=> { 
    axios.get(`${BOOK_DETAILS_URL}${id}`)
    .then(res=> { 
      setBook(res.data);
    }).catch(err => { 
      console.log(err);
    })
  }, [id])


  return (
    <div className='book-details'>

      <div className='book-image'>
        <h2 className='book-title'>{book.title}</h2>
        <img src={book?.image_url} alt="Book Image"/>
      </div>

      <div>
        <h2 className='label'>
          Description
        </h2>
        <p className='child'>
          {book?.description}
        </p>
        <h2 className='label'>Authors</h2>
        <p className='child'>{book?.authors}</p>
        <h2 className='label'>Genres</h2>
        <p className='child'>{book?.genres}</p>
      </div>

    </div>
  )
}

export default BookDetails
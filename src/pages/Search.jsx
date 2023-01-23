import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';

const Search = ({searchText}) => {
  const [photos, setPhotos] = useState("")
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchText}&image_type=photo&pretty=true`
      )
      .then((response) => setPhotos(response.data.hits))
      .catch((error) => console.log(error));
  }, [searchText]);
  return (
    <div className=' w-full h-full'>
      <h2 className=' w-full px-4 py-6 text-3xl'>
        Free {searchText} Photos
      </h2>

      <ItemCard photos={photos} />
    </div>
  )
}

export default Search
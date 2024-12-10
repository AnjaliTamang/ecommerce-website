import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './FoodDetail.css'
import { assets } from '../../assets/assets';

const FoodDetail = () => {
    const { id } = useParams(); 
    const { food_list } = useContext(StoreContext);
  
    const item = food_list.find((product) => product._id === id);
  
    if (!item) {
      return <p>Item not found!</p>;
    }
  return (
    <div className='food-detail'>
      <img src={item.image} alt={item.name} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <img src={assets.rating_starts} alt='Rating' />
    </div>
  )
}

export default FoodDetail
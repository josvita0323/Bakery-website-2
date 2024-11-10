import React, { useState } from 'react';
import './style/styles.css';

import Stby from './images/Stby.jpg';
import Redvelvet from './images/Redvelvet.jpeg';
import Wedding from './images/Wedding.jpeg';
import Vanilla3 from './images/vanilla3.jpg';
import Chocolate1 from './images/Chocolate.jpg';
import Stby1 from './images/Stby1.jpg';
import Slider from './Slider';


export default function Home({ addToCart, cart }) {
  const [flippedCards, setFlippedCards] = useState({
    strawberry: false,
    redvelvet: false,
    wedding: false,
    vanilla: false,
    chocolate: false,
    strawberry2: false,
  });

  // Handle the flip of cards
  const handleCardFlip = (cardId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  // Function to add cakes to the cart
  const handleAddToCart = (name, price, image, e) => {
    e.stopPropagation(); // Prevent card flip event when clicking 'Add to Cart'
    addToCart({ name, price, image });
  };

  const cakes = [
    {
      id: 'strawberry',
      name: 'Strawberry Cake',
      price: 500,
      image: Stby,
      ingredients: ['Fresh Strawberries', 'Flour', 'Butter', 'Sugar', 'Eggs'],
    },
    {
      id: 'redvelvet',
      name: 'Red Velvet Cake',
      price: 800,
      image: Redvelvet,
      ingredients: ['Red Food Color', 'Cocoa Powder', 'Flour', 'Butter', 'Sugar', 'Buttermilk'],
    },
    {
      id: 'wedding',
      name: 'Wedding Cake',
      price: 2500,
      image: Wedding,
      ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Vanilla Extract', 'Fondant'],
    },
    {
      id: 'vanilla',
      name: 'Vanilla Butter Cake',
      price: 730,
      image: Vanilla3,
      ingredients: ['Flour', 'Butter', 'Eggs', 'Sugar', 'Vanilla'],
    },
    {
      id: 'chocolate',
      name: 'Chocolate Cake',
      price: 650,
      image: Chocolate1,
      ingredients: ['Flour', 'Chocolate', 'Biscuit', 'Sugar', 'Butter', 'Eggs'],
    },
    {
      id: 'strawberry2',
      name: 'Strawberry Cake',
      price: 730,
      image: Stby1,
      ingredients: ['Fresh Strawberries', 'Flour', 'Butter', 'Sugar', 'Eggs'],
    },
  ];

  return (
    <div className="Section1">
      <div className="homee">
        <div className="home">
          <h3>Welcome to Let's Bake!!</h3>
          <p className="para">
            At Let's Bake, we're passionate about creating beautiful, delicious cakes that make every celebration unforgettable. From birthdays and weddings to custom creations, each cake is crafted with the finest ingredients and a touch of artistry.
          </p>
        </div>
        <div className="home-right">
          <h3>Our Best Selling Cakes</h3>
          <Slider /> {/* Slider component for the homepage */}
        </div>
      </div>

      <h3>Cakes you may like to Order</h3>
      <div className="coustom1">
      <div className="card-container">
        {cakes.map((cake) => (
          <div
            className={`card ${flippedCards[cake.id] ? 'flipped' : ''}`}
            key={cake.id}
            onClick={() => handleCardFlip(cake.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={cake.image} alt={cake.name} />
                <h2>{cake.name}</h2>
                <p>₹{cake.price}</p>
                <button onClick={(e) => handleAddToCart(cake.name, cake.price, cake.image, e)}>
                  Add to Cart
                </button>
              </div>
              <div className="card-back">
                <h2>Ingredients:</h2>
                <ul>
                  {cake.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}














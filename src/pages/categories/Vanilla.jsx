import React, { useState } from 'react';
import '../style/styles.css';

import Vanilla1 from '../images/Vanilla-bc.jpg';
import Wedding from '../images/Wedding.jpeg';
import Vanilla2 from '../images/Vanilla-c.jpg';
import Vanilla3 from '../images/vanilla3.jpg';
import Vanilla4 from '../images/Vanilla-r.jpg';
import Vanilla5 from '../images/Vanilla-ro.jpg';
import Vanilla6 from '../images/Vanilla-cr.jpg';
import Vanilla7 from '../images/Vanilla-p.jpg';

export default function Vanilla({ addToCart }) {
  const [flipped, setFlipped] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const handleCardClick = (index) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index], 
    }));
  };

  const cakes = [
    { id: 1, name: 'Vanilla Bisc Crums Cake', price: 650, image: Vanilla1, ingredients: ['Flour', 'Vanilla', 'Biscuit', 'Sugar', 'Butter', 'Eggs'] },
    { id: 2, name: 'Vanilla Cake', price: 600, image: Vanilla2, ingredients: ['Vanilla', 'Buttermilk', 'Flour', 'Eggs', 'Sugar'] },
    { id: 3, name: 'Vanilla Butter Cake', price: 730, image: Vanilla3, ingredients: ['Flour', 'Butter', 'Eggs', 'Sugar', 'Vanilla'] },
    { id: 4, name: 'Vanilla Rose Cake', price: 730, image: Vanilla4, ingredients: ['Flour', 'Butter', 'Eggs', 'Sugar', 'Vanilla'] },
    { id: 5, name: 'Vanilla Creme Rose Cake', price: 2300, image: Vanilla5, ingredients: ['Flour', 'Butter', 'Eggs', 'Sugar', 'Vanilla'] },
    { id: 6, name: 'Wedding Cake', price: 2500, image: Wedding, ingredients: ['Flour', 'Butter', 'Eggs', 'Sugar', 'Vanilla'] },
    { id: 7, name: 'Vanilla 3tier Rose Cake', price: 2600, image: Vanilla6, ingredients: ['Flour', 'Butter', 'Eggs', 'Sugar', 'Vanilla'] },
    { id: 8, name: 'Vanilla Pearl Cake', price: 2650, image: Vanilla7, ingredients: ['Flour', 'Edible Pearls', 'Butter', 'Eggs', 'Sugar', 'Vanilla'] },
  ];

  return (
    <div className="Section1">
      
      <section className="homee">
        <div className="home">
          <h3>Delicious Vanilla Cakes For You!!</h3>
          <div className="card-container">
            {cakes.map((cake) => (
              <div
                className={`card ${flipped[cake.id] ? 'flipped' : ''}`}
                key={cake.id}
                onClick={() => handleCardClick(cake.id)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={cake.image} alt={cake.name} />
                    <h2>{cake.name}</h2>
                    <p>₹{cake.price}</p>
                    <button onClick={(e) => { 
                      e.stopPropagation(); 
                      addToCart(cake); 
                    }}>Order Now</button>
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
      </section>
    </div>
  );
}

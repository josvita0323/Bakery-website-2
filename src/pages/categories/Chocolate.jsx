import React, { useState } from 'react';
import '../style/styles.css';
import Chocolate1 from '../images/Chocolate.jpg';
import Chocolate2 from '../images/Chocolate-crums.jpg';
import Chocolate3 from '../images/Chocolate-dive.jpg';
import Chocolate4 from '../images/Chocolate-f.jpg';
import Chocolate5 from '../images/Chocolate-forest.jpg';
import Chocolate6 from '../images/Chocolate-h.jpg';
import Chocolate7 from '../images/Chocolate-c.jpg';
import Redvelvet from '../images/Redvelvet.jpeg';

export default function Chocolate({ addToCart, cart }) {
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

  // Handle flip effect
  const handleCardClick = (index) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle flip state for the clicked card
    }));
  };

  // Handle add to cart functionality
  const handleAddToCart = (name, price, image) => {
    addToCart({ name, price, image });
  };

  return (
    <div>
      <div className="Section1">
        <section className="homee">
          <div className="home">
            <h3>Delicious Chocolate Cakes For You!!</h3>
            <div className="card-container">
              {/* Chocolate Cake Card */}
              <div
                className={`card ${flipped[1] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(1)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={Chocolate1} alt="Chocolate Cake" />
                    <h2>Chocolate Cake</h2>
                    <p>₹650</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent flip effect on button click
                        handleAddToCart('Chocolate Cake', 650, Chocolate1);
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="card-back">
                    <h2>Ingredients:</h2>
                    <ul>
                      <li>Flour</li>
                      <li>Chocolate</li>
                      <li>Biscuit</li>
                      <li>Sugar</li>
                      <li>Butter</li>
                      <li>Eggs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chocolate Crums Cake Card */}
              <div
                className={`card ${flipped[2] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(2)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={Chocolate2} alt="Chocolate Crums Cake" />
                    <h2>Chocolate Crums Cake</h2>
                    <p>₹600</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart('Chocolate Crums Cake', 600, Chocolate2);
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="card-back">
                    <h2>Ingredients:</h2>
                    <ul>
                      <li>Chocolate</li>
                      <li>Buttermilk</li>
                      <li>Flour</li>
                      <li>Eggs</li>
                      <li>Sugar</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chocolate Dive Cake Card */}
              <div
                className={`card ${flipped[3] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(3)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={Chocolate3} alt="Chocolate Dive Cake" />
                    <h2>Chocolate Dive Cake</h2>
                    <p>₹730</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart('Chocolate Dive Cake', 730, Chocolate3);
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="card-back">
                    <h2>Ingredients:</h2>
                    <ul>
                      <li>Flour</li>
                      <li>Butter</li>
                      <li>Eggs</li>
                      <li>Sugar</li>
                      <li>Chocolate</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chocolate Ferrero Rocher Cake Card */}
              <div
                className={`card ${flipped[4] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(4)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={Chocolate4} alt="Chocolate Ferrero Rocher Cake" />
                    <h2>Chocolate Ferrero Rocher Cake</h2>
                    <p>₹730</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart('Chocolate Ferrero Rocher Cake', 730, Chocolate4);
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="card-back">
                    <h2>Ingredients:</h2>
                    <ul>
                      <li>Flour</li>
                      <li>Butter</li>
                      <li>Eggs</li>
                      <li>Sugar</li>
                      <li>Chocolate</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chocolate Forest Cake Card */}
              <div
                className={`card ${flipped[5] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(5)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={Chocolate5} alt="Chocolate Forest Cake" />
                    <h2>Chocolate Forest Cake</h2>
                    <p>₹2300</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart('Chocolate Forest Cake', 2300, Chocolate5);
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="card-back">
                    <h2>Ingredients:</h2>
                    <ul>
                      <li>Flour</li>
                      <li>Butter</li>
                      <li>Eggs</li>
                      <li>Sugar</li>
                      <li>Chocolate</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chocolate Hazelnut Cake Card */}
              <div
                className={`card ${flipped[6] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(6)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={Chocolate6} alt="Chocolate Hazelnut Cake" />
                    <h2>Chocolate Hazelnut Cake</h2>
                    <p>₹2500</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart('Chocolate Hazelnut Cake', 2500, Chocolate6);
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="card-back">
                    <h2>Ingredients:</h2>
                    <ul>
                      <li>Flour</li>
                      <li>Butter</li>
                      <li>Eggs</li>
                      <li>Sugar</li>
                      <li>Chocolate</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chocolate Cream Cake Card */}
              <div
                className={`card ${flipped[7] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(7)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={Chocolate7} alt="Chocolate Cream Cake" />
                    <h2>Chocolate Cream Cake</h2>
                    <p>₹2600</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart('Chocolate Cream Cake', 2600, Chocolate7);
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="card-back">
                    <h2>Ingredients:</h2>
                    <ul>
                      <li>Flour</li>
                      <li>Butter</li>
                      <li>Eggs</li>
                      <li>Sugar</li>
                      <li>Chocolate</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Redvelvet Cake Card */}
              <div
                className={`card ${flipped[8] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(8)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={Redvelvet} alt="Redvelvet Cake" />
                    <h2>Redvelvet Cake</h2>
                    <p>₹2650</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart('Redvelvet Cake', 2650, Redvelvet);
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="card-back">
                    <h2>Ingredients:</h2>
                    <ul>
                      <li>Flour</li>
                      <li>Butter</li>
                      <li>Eggs</li>
                      <li>Sugar</li>
                      <li>Redvelvet</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


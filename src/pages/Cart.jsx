import React from 'react';
import './style/styles.css';

export default function Cart({ cart, handleOrderNow }) {
  return (
    <div className="cart-page">
    <div className="Section1">
     <section >
      <div className="homee">
        <div className="home">
          <div className="cart">
            <h3>Your Cart</h3>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                      <p>{item.name} - ₹{item.price}</p>
                    </li>
                  ))}
                </ul>
                <button onClick={handleOrderNow}>Order Now</button>
              </div>
            )}
          </div>
        </div>
      </div>
     </section>
     </div>
    </div>
  );
}

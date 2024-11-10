import React, { useState } from 'react';
import '../style/styles.css';



const CustomCakesPage = () => {
  const [cakeType, setCakeType] = useState('Chocolate');
  const [flavor, setFlavor] = useState('Vanilla');
  const [size, setSize] = useState('Medium');

  // Handle change of selected options
  const handleCakeTypeChange = (event) => {
    setCakeType(event.target.value);
  };

  const handleFlavorChange = (event) => {
    setFlavor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  // Show alert and reset the form after order is placed
  const handleOrderNow = () => {
    // Show an alert to inform the user their order is done
    alert('Your custom cake order has been placed successfully!');

    // Reset the state to the initial values
    setCakeType('Chocolate');
    setFlavor('Vanilla');
    setSize('Medium');
  };

  return (
    <div className="coustom1">
    <div className="Section1">
        
     
     <div className="homee">
     <div className="home"> 
     <h3>Coustomize Delicious Cake!!</h3>
    <div className="custom-cakes-page">
        
      <h1>Custom Cake Order</h1>

      <div className="cake-options">
        <div className="cake-option">
          <label htmlFor="cake-type">Cake Type</label>
          <select id="cake-type" value={cakeType} onChange={handleCakeTypeChange}>
            <option value="Chocolate">Chocolate</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Red Velvet">Red Velvet</option>
            <option value="Strawberry">Strawberry</option>
          </select>
        </div>

        <div className="cake-option">
          <label htmlFor="flavor">Flavor</label>
          <select id="flavor" value={flavor} onChange={handleFlavorChange}>
            <option value="Vanilla">Vanilla</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Butterscotch">Butterscotch</option>
            <option value="Pineapple">Pineapple</option>
          </select>
        </div>

        <div className="cake-option">
          <label htmlFor="size">Size</label>
          <select id="size" value={size} onChange={handleSizeChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
      </div>

      <div className="cake-preview">
        <h2>Your Custom Cake Preview</h2>
        <div className="cake-preview-details">
          <p><strong>Cake Type:</strong> {cakeType}</p>
          <p><strong>Flavor:</strong> {flavor}</p>
          <p><strong>Size:</strong> {size}</p>
        </div>
      </div>

      <div className="order-button">
        <button onClick={handleOrderNow}>Order Now</button>
      </div>
    </div>
    </div>
    </div>  
    </div>
    </div>
  );
};

export default CustomCakesPage;

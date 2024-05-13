import React from "react";
import './styles/Card.css';

const buttonGroup = {
  display: "flex",
  gap: "5px"
}

const Card = ({ product, addToCartFunction, viewProduct}) => {
  return (
    <div>
      <div>
        <div className="card">
          <div className="item-image">
          <img src={product.image_link} alt="" />
          <p>${product.price}</p>
          </div>
          <div className="details">
            <p>{product.name}</p>
          </div>
          <div style={buttonGroup}>
            <button onClick={() => viewProduct(product)} className="addbutton">View product</button>
            <button onClick={() => addToCartFunction(product)} className="addbutton">Add to bag</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

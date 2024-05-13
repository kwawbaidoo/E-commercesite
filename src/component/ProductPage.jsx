import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import Card from "./Card";
import { products } from "../Products";
import Payment from "./Payment";

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [checkout, setCheckout] = useState(false);
  const [productQty, setProductQty] = useState(1);

  const addToCartFunction = (item) => {
    let tempCart = cartItems;
    //perform a check
    const itemM = tempCart.find((it) => it.name === item.name);
    // console.log(itemM);

    if (!itemM) {
      item.quantity = 1;
    } 
    else {
      return;
    }
    // else
    // {
    //   itemM.quantity = itemM.quantity + 1;
    // }

    // console.log(item);

    tempCart.push(item);

    // tempCart = Array.from(new Set(tempCart))

    setCartItems(tempCart);

    setCartCount(cartItems.length);
    // quantity();
  };

  const handlesCheckout = () => {
    if (cartCount <= 0) {
      alert("Please select items before you can checkout");
      return;
    }

    setCheckout(true);
    setProductDetailView(false);
    setPay(false);
    setTotalPrice(false);
  };

  const findPrice = (prices) => {
    let sum = 0;
    for (let pos = 0; pos < prices.length; pos++) {
      sum = sum + prices[pos];
    }
    return sum;
  };

  const [productDetailView, setProductDetailView] = useState(false);
  const [product, setProduct] = useState({});

  const viewProduct = (product) => {
    setProductDetailView(true);
    setCheckout(false);
    setProduct(product);
  };

  const emptyCart = () => {
    setCartCount(0);
    setCartItems([]);
    setCheckout(false);
  };

  const [pay, setPay] = useState(false);
  const paymentDetails = () => {
    setPay(true);
    setCheckout(false);
    totalCost();
  };

  const [totalPrice, setTotalPrice] = useState(false);
  const totalCost = () => {
    setTotalPrice(true);
  };


  const itemIncrease = (item) => {

    setCartItems(prev => [...prev, { ...item, quantity: item.quantity + 1 }]);
    // setProductQty(item.quantity);
    // setProductQty(prev => prev + 1);
    // item.quantity = productQty;
    console.log(cartItems);
    // let index = -1;
    // const tempCartItems = cartItems;
    // console.log(tempCartItems)
    // const itemM = cartItems.find((it, key) => {
    //   index = key
    //   return it.name === item.name
    // });
    // item.quantity = item.quantity + 1;

    // tempCartItems[index] = item;
    // console.log(tempCartItems);
    // setCartItems(tempCartItems);
  
    // // itemM.quantity =size;
    // // const name =cartItems.name;
    // console.log(item.quantity)
  
  };

  return (
    <div className="container">
      <div className="filters">
        <h2>Filters</h2>
      </div>
      <div className="products-section">
        <div className="searchNav">
          <input type="text" placeholder="search" />
          <div className="cart">
            <p>
              Cart <span>{cartCount}</span>
            </p>
            <button onClick={handlesCheckout}>Checkout</button>
          </div>
          <div>
            {totalPrice ? (
              <p>
                Total price: ${findPrice(cartItems.map((item) => item.price))}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="items-container">
          <div className="items">
            <h4>Customers also bought</h4>
            <div className="productCart">
              {products.products.map((product) => (
                <Card
                  product={product}
                  addToCartFunction={addToCartFunction}
                  viewProduct={viewProduct}
                />
              ))}
            </div>
          </div>

          {checkout ? (
            <div className="checkout-section">
              <h1>Checkout section</h1>
              <ul>
                {cartItems.map((product) => (
                  <li className="productDetails">
                    <div>
                      <p>{product.name}</p>
                      <p
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        ${product.price}
                      </p>
                      {/* quantity buttons */}
                     <span className="quantity_btn">
                      <button>-</button>
                      <p>{productQty || product.quantity}</p>
                      <button onClick={() =>itemIncrease(product)}>+</button>
                     </span>
                    </div>
                    <img src={product.image_link} alt="" />
                  </li>
                ))}
              </ul>
              <p>
                Total Price: ${findPrice(cartItems.map((item) => item.price))}
              </p>
              <div className="optionButton">
                <button className="empty" onClick={emptyCart}>
                  Empty Cart
                </button>
                <button className="payment" onClick={paymentDetails}>
                  Make payment
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          {productDetailView ? (
            <div
              style={{
                padding: "10px",
              }}
              className="checkout-section"
            >
              <h1>Product details</h1>
              <img src={product.image_link} alt={product.name} />
              <div>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Product name: {product.name}
                </p>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Product price: ${product.price}
                </p>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Product category: {product.category}
                </p>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Description
                </p>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {product.long_description}
                </p>
                <button
                  onClick={() => addToCartFunction(product)}
                  className="addbutton"
                >
                  Add to bag
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          <div>{pay ? <Payment /> : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

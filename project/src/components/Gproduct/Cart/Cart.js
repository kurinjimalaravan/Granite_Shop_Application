import React, { useState, useEffect } from "react";
import "./cart.css";
import Navbar from '../../Navbar'


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    ans+=(ans*5/100)
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div>
      <Navbar />
    
    <article className="garticle">
      <h3>5% GST for Every Purchase</h3>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, 1)}>+</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price with GST </span>
        <span>Rs : {price}</span>
      </div>
      <div className="cartbutn">
        <div> 
           
        </div>
        <div> 
        <a href="https://rzp.io/l/zBk3wHju"><input className='btn' type='button' value='Buy Product'></input></a>
            {/* <Link className='btn' onClick={handleSubmit()} ><a href="https://rzp.io/l/zBk3wHju">Confirm Order</a></Link>
            <a className='btton'href="https://rzp.io/l/zBk3wHju">Buy Product</a> */}
        </div>
      </div>
    </article>
    </div>
  );
};

export default Cart;

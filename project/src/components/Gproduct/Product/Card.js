import React from "react";
// import { toast } from "react-toastify";
// import Login from "../../Login";

const Cards = ({ item, handleClick }) => {
  // const{log} = loged;
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price : Rs {price}</p>
        <button onClick={() =>{handleClick(item)
          // if({log}===1){
          //   toast.success("1 Item Added to the Cart");
          //   handleClick(item)
          // }
          // else {toast.error("Please Login !!")}
        }}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;



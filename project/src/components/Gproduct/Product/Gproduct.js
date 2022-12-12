import React from "react";
import {granite,tiles} from "../../../data";
import Cards from "../Product/Card";
import "./gproduct.css";
import Footer from '../../Footer'
import Navbar from "../../Navbar";


// const handleClick = () => {
//   toast.success("1 Item Added to the Cart");
// }


const Product = ({ handleClick }) => {
  return (
    <div>
      <Navbar />
    <div className="product">
      <h3 className="h3a"><a href="#Tiles">Move to Tiles</a></h3>
    <div className="ph3" id="Granite"><p>Granite Product</p></div>
      <section className="sectiong">
        {granite.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section><br/><br/>
      {/* <div className="pbutt">Explore More!!</div> */}

      <h3 className="h3a"><a href="#Granite">Move to Granites</a></h3>
      <div className="ph3" id="Tiles"><p>Tiles Product</p></div>
      <section className="sectiong">
        {tiles.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick}/>
        ))}
      </section>
      {/* <div className="pbutt">Explore More!!</div> */}
      <Footer/>
    </div>
    </div>
  );
};

export default Product;

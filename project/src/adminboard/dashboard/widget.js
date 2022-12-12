import React from 'react'
import "./widget.css";
import {BsSlack} from "react-icons/bs";
import {MdOutlineProductionQuantityLimits} from "react-icons/md";
import {FaPeopleArrows, FaUserPlus} from "react-icons/fa";
import {AiFillDropboxSquare} from "react-icons/ai";

const Widget = ({ type }) => {
  let data;

  //temporary
  // const amount = 10;
  const diff = 10;

  switch (type) {
    case "user":
      data = {
        atitle: "USERS",
        isMoney: false,
        link: "View users",
        aicon: (
          <FaUserPlus
            className="aicon"
            style={{
              color: "green",
              backgroundColor: 'lightgreen',
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        atitle: "ORDERS",
        isMoney: false,
        link: "View orders",
        aicon: (
          <MdOutlineProductionQuantityLimits
            className="aicon"
            style={{
              color: "green",
              backgroundColor: 'lightgreen',
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        atitle: "SUPPLIER",
        isMoney: false,
        link: "View suppliers",
        aicon: (
          <FaPeopleArrows
            className="aicon"
            style={{ color: "green",
            backgroundColor: 'lightgreen', }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        atitle: "PRODUCT",
        isMoney: false,
        link: "View Products",
        aicon: (
          <AiFillDropboxSquare
            className="aicon"
            style={{
              color: "green",
              backgroundColor: 'lightgreen',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="atitle">{data.atitle}</span>
        {/* <span className="acounter">
          {data.isMoney && "₹"} {amount}
        </span> */}
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <BsSlack /> 
          {diff} %
        </div>
        {data.aicon}
      </div>
    </div>
  );
};

export default Widget;

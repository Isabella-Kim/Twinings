import React from "react";
import { Link } from "react-router-dom";

const Superblends = ({ data }) => {
  let dataList = data.filter((item) => item.category == "s");
  return (
    <div className="Superblends">
      {dataList.map((item) => {
        return (
          <li key={item._id}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Discount: {item.discount}%</p>
          </li>
        );
      })}
    </div>
  );
};

export default Superblends;

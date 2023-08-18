import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = ({ data }) => {
  return (
    <>
      <section className="Main">
        {data.map((item) => {
          return (
            <li key={item._id}>
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>Discount: {item.discount}%</p>
            </li>
          );
        })}
      </section>
    </>
  );
};

export default Main;

import React from "react";
import "./Card.css";
export default function Card({ Title, subTitle, Price }) {
  return (
    <div className="card">
      <span className="card-text card-heading">{Title}</span>

      <span className="card-text card-subheading">{subTitle}</span>
      <div className="card-text card-price">
        From:<span className="card-text price">₹{Price}</span>/month
      </div>
    </div>
  );
}
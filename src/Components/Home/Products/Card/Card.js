import React from "react";

const Card = () => {
  return (
    <div className="product">
      <img
        src="../img/product_1.png"
        className="pointer"
        alt="product_1"
        height={425}
        width={340}
      />
      <h4 className="product_name text-center fweight-400 fstyle-normal spacing-1">
        Rejuvenating Cleanser
      </h4>
      <div className="product_price text-center uppercase kurona fsize-11 fweight-400 fstyle-normal spacing-1">
        CFA 100.00 XOF
      </div>
    </div>
  );
};

export default Card;

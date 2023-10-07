import "./Quote.scss";
import React from "react";

const Quote = () => {
  return (
    <section className="quote flex jc-se aic clr-white">
      <div className="quote-picture min-vh-100 w-30 flex jcc aic">
        <img
          src="https://assets.website-files.com/5c6b1e202671cc709f08d49e/5e31f2132639f8834004accf_tall-1.jpg"
          className="img-fluid rounded-top w-95 pos-rel"
        />
        <div className="round-circle-left circle pos-abs"></div>
      </div>
      <div className="quote-text text-center w-45 min-vh-100 flex column aic jcc m0 p0">
        <blockquote className="p0">
          “Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain. Wash your spirit clean.”
        </blockquote>
        <div className="author uppercase fweight-400 fstyle-normal fsize-11 spacing-1 kurona">
          – john muir
        </div>
      </div>
    </section>
  );
};

export default Quote;

import React from "react";
import "../css/shop.css";

const Shop = ({ users, score, raiseCardBuy }) => {
  return (
    <section className="deck grid grid--1x5">
      {users.map((e) => (
        <div
          onClick={() => raiseCardBuy(e)}
          key={e.username}
          className={e.prices > score ? "card locked" : "card unlocked"}
        >
          <span className="card__score">{e.prices} hamacoins</span>
          <img className="card__image" src={e.imgUrl} alt="" />
          <h4 className="card__title"> {e.username} </h4>
          <p className="card__description">{e.description}</p>
          <span className="card__points">+{e.bonusPerClick}</span>
          {e.passiveBonus === 0 ? null : (
            <span className="card__points--passive">{e.passiveBonus}</span>
          )}
        </div>
      ))}
    </section>
  );
};

export default Shop;

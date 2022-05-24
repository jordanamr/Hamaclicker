import React, {Component} from "react";
import "../css/shop.css";

class Shop extends Component {
  filterCards = () => {
    const users = [...this.props.users]
    const usersSorted = users.filter(e => e.prices < this.props.score).sort((a, b) => a > b)

    return usersSorted.map((e) => (
      <div
        onClick={() => this.props.raiseCardBuy(e)}
        key={e.username}
        className={
          e.prices > this.props.score ? "card locked" : "card unlocked"
        }
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
    ))
  }
  render() {
    // console.log("prices", this.props.users[0].prices, "score:", this.props.score);
    return (
      <section className="deck grid grid--1x5">
        {this.filterCards()}
      </section>
    );
  }
}

export default Shop;

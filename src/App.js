import React, { Component } from "react";
import { getUsers, getCardsCount } from "./services/users";
import "./App.css";

import Shop from "./components/shop";
import Counter from "./components/counter";
import Deck from "./components/deck";

class App extends Component {
  state = {
    users: [],
    score: 80,
    cards: [],
    pointPerClicks: 1,
    passivePointPerSeconds: 0,
  };

  componentDidMount() {
    this.setState({ users: getUsers(), cards: getCardsCount() });
    this.handlePassivePoints();
  }

  handlePassivePoints = () => {
    setInterval(() => {
      this.setState({
        score: this.state.score + this.state.passivePointPerSeconds,
      });
    }, 1000);
  };

  handleScore = () => {
    this.setState({ score: this.state.score + this.state.pointPerClicks });
  };

  handleCardBuy = (card) => {
    const cards = [...this.state.cards];
    const users = [...this.state.users];

    console.log(card.username);
    const currentObject = users.filter((e) => e.username === card.username);
    if (currentObject[0].prices > this.state.score) {
      alert("pas assez igo");
    } else {
      for (const i of cards) {
        if (i.username === card.username) {
          i.count++;
        }
      }
      this.setState({
        cards,
        score: this.state.score - currentObject[0].prices,
        pointPerClicks: this.state.pointPerClicks + card.bonusPerClick,
        passivePointPerSeconds:
          this.state.passivePointPerSeconds + card.passiveBonus,
      });
      currentObject[0].prices = parseInt(currentObject[0].prices) + 5;
    }
  };

  render() {
    const { users, score, passivePointPerSeconds, cards } = this.state;
    return (
      <>
        <div className="container">
          <Counter
            score={score}
            passivePointPerSeconds={passivePointPerSeconds}
            raiseClicked={this.handleScore}
            users={users}
            cards={cards}
          />
          <Shop users={users} score={score} raiseCardBuy={this.handleCardBuy} />
        </div>
      </>
    );
  }
}

export default App;

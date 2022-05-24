import React, { Component } from "react";
import { getUsers, getCardsCount } from "./services/users";
import "./App.css";
// import Welcom from "./components/welcom";

import Shop from "./components/shop";
import Counter from "./components/counter";
// import Deck from "./components/deck";
// import Loading from "./components/loading";

class App extends Component {
  state = {
    users: [],
    score: 2520,
    cards: [],
    pointPerClicks: 1,
    passivePointPerSeconds: 0,
    isLoading: false,
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
    const currentObject = users.filter((user) => user.username === card.username);
    const currentCard = cards.find((e) => e.username === card.username)

    if(currentCard.count >= 3) return alert("Maximum 3 cartes similaire! car pas encore fini de dev les bonus améliorés")

    // Handle Ouiki effect, 1 chance per 4 to get robbed
    if (card.username === "Ouiki") {
      let chance = Math.round(Math.random() * 4);
      if (chance === 1) {
        this.setState({ score: this.state.score - users[1].prices });
        return alert("Ouiki a volé vos hamacoins, pas de chance");
      }
    }

    // Handle if enought hamacoins to be able to buy a card
    if (currentObject[0].prices > this.state.score) {
      document.querySelector(
        ".score__container"
      ).innerHTML += `<h3 class="score__popup"> Pas assez de Hamacoins </h3>`;
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
    const { users, score, passivePointPerSeconds, cards, isLoading } =
      this.state;

    return (
      <>
        <div className="container">
          {/* <Welcom/> */}
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

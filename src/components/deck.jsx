import React from "react";
import "../css/deck.css";

// If the count of our decks object si equal or greater than 1, show that card in the deck
const Deck = ({ users, cards }) => {
  return (
    <div className="grid grid--cardWidth deck">
      {users.map((user) =>
        cards.map((card) =>
          card.count >= 1 && card.username === user.username ? (
            <div key={user.username} className="card--deck">
              {card.count > 1 ? <span className="card__count">{card.count}</span> : null}
              <img className="card__image--deck" src={user.imgUrl} alt="" />
              <h4 className="card__title--deck"> {user.username} </h4>
            </div>
          ) : null
        )
      )}
    </div>
  );
};

export default Deck;

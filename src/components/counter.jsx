import React, { useEffect } from "react";
import "../css/counter.css";

import Stats from "./stats";
import Deck from "./deck";

const Counter = ({
  score,
  raiseClicked,
  passivePointPerSeconds,
  users,
  cards,
}) => {
  useEffect(() => {
    document.title = `Tu as ${score} Hamacoins!`;
  }, [score]);

  return (
    <>
      <div className="score grid grid--1x3">
        <Deck users={users} cards={cards} />
        <div className="score__container">
          <h4 className="score__points" onClick={raiseClicked}>
            {score} 
          </h4>
          <br/>
          <p>{passivePointPerSeconds} hamacoins passif par seconde</p>
        </div>
        <Stats users={users} cards={cards} />
      </div>
    </>
  );
};

export default Counter;

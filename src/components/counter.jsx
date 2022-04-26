import React from "react";
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
  return (
    <>
      <div className="score grid grid--1x2">
        <div className="score__points">
          <h4 onClick={raiseClicked}>{score}</h4>
          <p>{passivePointPerSeconds} par seconde</p>
        </div>
        <Stats users={users} cards={cards} />
      </div>
      <Deck users={users} cards={cards} />
    </>
  );
};

export default Counter;

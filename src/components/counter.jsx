import React, {useEffect} from "react";
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
    document.title = `Tu as ${score} Hamacoins!`

  }, [score]);

  return (
    <>
      <div className="score grid grid--1x2">
        <div>
          <h4 className="score__points" onClick={raiseClicked}>{score}</h4>
          <p>{passivePointPerSeconds} par seconde</p>
        </div>
        <Stats users={users} cards={cards} />
      </div>
      <Deck users={users} cards={cards} />
    </>
  );
};

export default Counter;

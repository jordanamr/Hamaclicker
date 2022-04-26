import React from "react";
import "../css/stats.css";

const Stats = ({ users, cards }) => {
  return (
    <div className="stats">
      <h1 className="stats__heading">Bonus actuel</h1>
      <div className="stats__bonus grid grid--1x2">
        {users.map((user) =>
          cards.map((card) =>
            card.count >= 1 && user.username === card.username ? (
              <div key={user.username}>
                <img className="stats__imgBonus" src={user.imgBonus} alt="" />
                <p>{user.bonus}</p>
              </div>
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default Stats;

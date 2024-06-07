import React from "react";
import "../css/stats.css";

const Stats = ({ users, cards }) => {
  return (
    <div className="stats">
      {/* <h1 className="stats__heading">Bonus actuel</h1> */}
      <div className="stats__bonus grid grid--1x3">
        {users.map((user) =>
          cards.map((card) =>
            card.count >= 1 && user.username === card.username ? (
              <div className="bonus__container" key={user.username}>
                <a style={{textDecoration: "none", color: "inherit"}} target="_blank" rel="noreferrer" href={user.linkBonus}>
                  <img className="stats__imgBonus" src={user.imgBonus} alt="" />
                  <p>{user.bonus}</p>
                </a>
              </div>
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default Stats;

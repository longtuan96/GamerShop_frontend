import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SmallGameBox from "./SmallGameBox";

const GameCloset = ({ title }) => {
  let gameArray;
  const currentUser = useSelector((state) => state.user.currentUser);
  if (title === "Favorites") {
    gameArray = currentUser.favorite;
  } else if (title === "All Games") {
    gameArray = currentUser.ownedGames;
  }
  return (
    <>
      <div className="d-flex">
        <h3>title</h3>
        <p>number</p>
        <h4>SORT BY</h4>
        <button>Dropdown</button>
        <hr />
        <button>show more</button>
      </div>
      <>
        <Row>
          {gameArray !== [] || gameArray !== null || gameArray !== undefined ? (
            gameArray.map((item) => (
              <SmallGameBox game={item} isWithInfo={false} />
            ))
          ) : (
            <h1>{`there are no game in ${title}`} </h1>
          )}
        </Row>
      </>
    </>
  );
};

export default GameCloset;

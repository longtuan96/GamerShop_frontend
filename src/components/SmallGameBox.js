import React from "react";
import { useHistory } from "react-router";

const SmallGameBox = ({ game }) => {
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/game/${id}`);
  };
  return (
    <div
      style={{ width: "100%", maxWidth: "100%", padding: "10%" }}
      onClick={() => handleClick(game._id)}
    >
      <img src={game.picture} alt="small pic" style={{ width: "100%" }} />
      <p>{game.name}</p>
      <p>{game.status}</p>
      <p>{game.price}</p>
    </div>
  );
};

export default SmallGameBox;

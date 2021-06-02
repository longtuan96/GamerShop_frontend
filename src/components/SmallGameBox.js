import React from "react";
import { useHistory } from "react-router";

const SmallGameBox = ({ game, isWithInfo }) => {
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/game/${id}`);
  };
  return (
    <div
      className="SmallBoxGame"
      style={{
        width: "100%",
        maxWidth: "100%",
        padding: "10%",
        transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
      }}
      onClick={() => handleClick(game._id)}
    >
      <img src={game.picture} alt="small pic" style={{ width: "100%" }} />
      {isWithInfo === true ? (
        <>
          <p style={{ padding: "2px", fontSize: "100%" }}>{game.name}</p>
          <p>{game.status !== "Released" ? game.status : ""}</p>

          {game.discount !== 0 ? (
            <>
              <div
                style={{
                  color: "white",
                  padding: "1px",
                  background: "black",
                  width: "max-content",
                  fontWeight: "bold",
                }}
              >
                {`-${game.discount}%`}
              </div>
              <div className="d-flex">
                <p>{`$${game.price - (game.price * game.discount) / 100}`}</p>
                <p
                  style={{
                    textDecoration: "line-through",
                    marginLeft: "2px",
                    color: "grey",
                  }}
                >{`$${game.price}`}</p>
              </div>
            </>
          ) : (
            <>
              <p>{`$${game.price}`}</p>
            </>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SmallGameBox;

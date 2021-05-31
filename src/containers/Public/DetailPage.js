import React, { useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { gameActions } from "../../redux/actions/game.actions";
import { orderActions } from "../../redux/actions/order.actions";
import { userActions } from "../../redux/actions/user.actions";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const selectedGame = useSelector((state) => state.game.selectedGame);
  const loading = useSelector((state) => state.game.loading);

  const handleClick = (btn, id) => {
    switch (btn) {
      case "add to cart":
        dispatch(orderActions.addItemCurrentOrder(id));
        dispatch(userActions.getCurrentUser());
        break;
      case "add to favorite":
        dispatch(userActions.addToFavorite(id));
        dispatch(userActions.getCurrentUser());
        break;
      case "remove from favorite":
        dispatch(userActions.removeFromFavorite(id));
        dispatch(userActions.getCurrentUser());
        break;
      case "remove from cart":
        dispatch(orderActions.removeItemCurrentOrder(id));
        dispatch(userActions.getCurrentUser());
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(gameActions.getSingleGame(id));
  }, []);

  return (
    <>
      {loading === "true" &&
      (selectedGame === undefined ||
        selectedGame === {} ||
        selectedGame === null) ? (
        <h1>LOADING!!!!</h1>
      ) : (
        <>
          <div style={{ position: "relative" }}>
            <img src={selectedGame.poster} alt="" style={{ width: "100%" }} />
            <div
              style={{
                position: "absolute",
                left: "30px",
                bottom: "-20px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "20px",
              }}
            >
              <h1>{selectedGame.title}</h1>
              <p>{selectedGame.publisher}</p>
              {selectedGame.platform &&
                selectedGame.platform.map((item) => <div>{item}</div>)}
              <div>{selectedGame.price}</div>
              <div>
                {currentUser.cart &&
                currentUser.cart.games.indexOf(selectedGame._id) === -1 ? (
                  <button
                    onClick={() => handleClick("add to cart", selectedGame._id)}
                  >
                    {" "}
                    add to cart
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleClick("remove from cart", selectedGame._id)
                    }
                  >
                    {" "}
                    remove from cart
                  </button>
                )}
                {currentUser.favorite &&
                currentUser.favorite.filter(
                  (item) => item._id === selectedGame._id
                ).length === 0 ? (
                  <button
                    onClick={() =>
                      handleClick("add to favorite", selectedGame._id)
                    }
                  >
                    heart
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleClick("remove from favorite", selectedGame._id)
                    }
                  >
                    remove from favorite
                  </button>
                )}
              </div>
            </div>
          </div>

          <div>
            <div>
              <h1>Game and Legal Info</h1>
              <p>{selectedGame.description}</p>
            </div>
            <Row>
              <Col>
                <Table size="sm">
                  <tbody>
                    <tr>
                      <td>Platform: </td>
                      <td>
                        {selectedGame.platform &&
                          selectedGame.platform.toString()}
                      </td>
                    </tr>
                    <tr>
                      <td>Release: </td>
                      <td>{selectedGame.release_date}</td>
                    </tr>
                    <tr>
                      <td>Publisher: </td>
                      <td>{selectedGame.publisher}</td>
                    </tr>
                    <tr>
                      <td>Genre:</td>
                      <td>
                        {selectedGame.genre && selectedGame.genre.toString()}
                      </td>
                    </tr>
                    <tr>
                      <td>Languages:</td>
                      <td>
                        {selectedGame.languages &&
                          selectedGame.languages.toString()}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col>{selectedGame.additionalInfo}</Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default DetailPage;

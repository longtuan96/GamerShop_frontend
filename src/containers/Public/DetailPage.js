import React, { useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { gameActions } from "../../redux/actions/game.actions";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameActions.getSingleGame(id));
  }, []);

  const selectedGame = useSelector((state) => state.game.selectedGame);
  const loading = useSelector((state) => state.game.loading);
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
                <button> add to cart</button>
                <button>heart</button>
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

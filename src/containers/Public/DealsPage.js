import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SmallGameBox from "../../components/SmallGameBox";
import { gameActions } from "../../redux/actions/game.actions";

const DealsPage = () => {
  const deals = useSelector((state) => state.game.deals);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameActions.getDealsGame());
  }, []);
  return (
    <div>
      <div style={{ padding: "100px" }}>
        <h1>Deals</h1>
        <div>
          <Row>
            {deals &&
              deals.map((item) => (
                <Col lg={4} key={item._id}>
                  <SmallGameBox game={item} isWithInfo={true} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DealsPage;

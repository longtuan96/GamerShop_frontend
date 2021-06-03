import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SmallGameBox from "../../components/SmallGameBox";
import { gameActions } from "../../redux/actions/game.actions";
import { Box, Text } from "@chakra-ui/react";
let Loader = require("react-loader");
const DealsPage = () => {
  const loading = useSelector((state) => state.game.loading);
  const deals = useSelector((state) => state.game.deals);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameActions.getDealsGame());
  }, []);
  return (
    <div>
      <div style={{ padding: "100px" }}>
        <div className="text-center">
          <Text fontSize="5xl" fontWeight="bold">
            Deals
          </Text>
        </div>
        <Loader loaded={!loading}>
          <Row>
            {deals &&
              deals.map((item) => (
                <Col lg={4} key={item._id}>
                  <SmallGameBox game={item} isWithInfo={true} />
                </Col>
              ))}
          </Row>
        </Loader>
      </div>
    </div>
  );
};

export default DealsPage;

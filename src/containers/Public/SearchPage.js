import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import SmallGameBox from "../../components/SmallGameBox";
let Loader = require("react-loader");
const SearchPage = ({}) => {
  const loading = useSelector((state) => state.game.loading);
  const searchGames = useSelector((state) => state.game.searchGames);
  return (
    <div style={{ padding: "100px" }}>
      <h1>Search</h1>
      <Loader loaded={!loading}>
        <Row>
          {searchGames &&
            searchGames.map((item) => (
              <Col lg={4} key={item._id}>
                <SmallGameBox game={item} isWithInfo={true} />
              </Col>
            ))}
        </Row>
      </Loader>
    </div>
  );
};

export default SearchPage;

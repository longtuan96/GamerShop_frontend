import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import SmallGameBox from "../../components/SmallGameBox";

const SearchPage = ({}) => {
  const searchGames = useSelector((state) => state.game.searchGames);
  return (
    <div style={{ padding: "100px" }}>
      <h1>Search</h1>
      <div>
        <Row>
          {searchGames &&
            searchGames.map((item) => (
              <Col lg={4} key={item._id}>
                <SmallGameBox game={item} isWithInfo={true} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default SearchPage;

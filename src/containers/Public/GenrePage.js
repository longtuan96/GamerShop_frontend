import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SmallGameBox from "../../components/SmallGameBox";
import { Box, Text } from "@chakra-ui/react";
import Pagination from "react-pagination-library";
import { gameActions } from "../../redux/actions/game.actions";

const GenrePage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    currentPage: 1,
  });

  const genreGames = useSelector((state) => state.game.genreGames);
  const title = useSelector((state) => state.game.genrePageTitle);
  const totalPages = useSelector((state) => state.game.totalPages);
  const changeCurrentPage = (numPage) => {
    setState({ currentPage: numPage });
    dispatch(gameActions.getGenreGames(title, numPage));
  };
  return (
    <div style={{ padding: "100px" }}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Text fontSize="5xl" fontWeight="bold">
          {title}
        </Text>
      </div>
      <div>
        <Row>
          {genreGames &&
            genreGames.map((item) => (
              <Col lg={4} key={item._id}>
                <SmallGameBox game={item} isWithInfo={false} />
              </Col>
            ))}
        </Row>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Pagination
            currentPage={state.currentPage}
            totalPages={totalPages}
            changeCurrentPage={changeCurrentPage}
            theme="bottom-border"
          />
        </div>
      </div>
    </div>
  );
};

export default GenrePage;

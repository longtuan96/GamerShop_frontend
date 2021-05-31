import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import GameSlider from "../../components/GameSlider";
import GenreButton from "../../components/GenreButton";

const CollectionPage = () => {
  const games = useSelector((state) => state.game.games);
  const genre = [{ title: "ACTION", picture: "images/ActionPic.jpg" }];
  const handleClick = () => {};
  return (
    <div style={{ padding: "100px 30px", height: "auto", width: "100%" }}>
      <Row>
        {genre.map((item) => (
          <Col lg={3} md={4} sm={6} key={item.title}>
            <GenreButton title={item.title} picture={item.picture} />
          </Col>
        ))}
      </Row>

      <GameSlider games={games} title="Free to play" />
    </div>
  );
};

export default CollectionPage;

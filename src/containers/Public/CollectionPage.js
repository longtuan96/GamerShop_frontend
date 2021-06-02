import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import GameSlider from "../../components/GameSlider";
import GenreButton from "../../components/GenreButton";
import { gameActions } from "../../redux/actions/game.actions";
import { Text } from "@chakra-ui/react";
const CollectionPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const games = useSelector((state) => state.game.games);
  const genre = [
    { title: "ACTION", name: "Action", picture: "images/ActionPic.jpg" },
    { title: "HORROR", name: "Horror", picture: "images/HorrorPic.jpg" },
    { title: "FPS", name: "FPS", picture: "images/ShootingPic.jpg" },
    { title: "MMORPG", name: "MMORPG", picture: "images/MMO.jpeg" },
    {
      title: "SIMULATION",
      name: "Simulation",
      picture: "images/SimulationPic.jpg",
    },
    { title: "FIGHTING", name: "Fighting", picture: "images/Fighting.jpg" },
    { title: "RACING", name: "Racing", picture: "images/Racing.jpg" },

    { title: "SPORT", name: "Sport", picture: "images/SportPic.jpg" },
  ];

  const handleClick = (btnName) => {
    dispatch(gameActions.getGenreGames(btnName, 1));
    history.push(`/genre/${btnName}`);
  };
  return (
    <div
      style={{
        padding: "100px 30px",
        height: "auto",
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      <Text fontSize="5xl" fontWeight="light" align="center">
        {" "}
        Genres
      </Text>
      <Row style={{ margin: "50px 0 " }}>
        {genre.map((item) => (
          <Col
            lg={3}
            md={4}
            sm={6}
            key={item.title}
            onClick={() => handleClick(item.name)}
          >
            <GenreButton title={item.title} picture={item.picture} />
          </Col>
        ))}
      </Row>

      {/* <GameSlider games={games} title="Free to play" /> */}
    </div>
  );
};

export default CollectionPage;

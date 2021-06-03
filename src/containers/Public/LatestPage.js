import React, { useEffect } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import Banner from "../../components/Banner";
import GameBox from "../../components/GameBox";
import GameSlider from "../../components/GameSlider";
import { Box, Text, Center } from "@chakra-ui/react";
import HomeBoard from "../../components/HomeBoard";
import UserCart from "../../components/UserCart";
let Loader = require("react-loader");
const LatestPage = () => {
  const games = useSelector((state) => state.game.games);
  const game = useSelector((state) => state.game.game);
  const loading = useSelector((state) => state.game.loading);
  return (
    <Loader loaded={!loading}>
      {game && (
        <>
          <Center
            style={{
              width: "100%",
              paddingTop: "100px",
            }}
          >
            <Carousel interval={3000} style={{ width: "90%" }}>
              {games &&
                games.map((item) => (
                  <Carousel.Item key={item._id}>
                    <img
                      className="d-block w-100"
                      src={item.poster}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </Center>
          <Box p={"5% 10% 0 10%"} className="text-center">
            <Text fontSize="4xl" fontWeight="light" color="gray">
              The biggest games out now
            </Text>
            <Text fontSize="xl" color="gray">
              Whether you want to swing through the city, ride into battle or
              save the day - with the latest games available to buy now and the
              most exciting upcoming games, your next big adventure is never too
              far away.
            </Text>
          </Box>
          {games !== [] || games !== null || games !== undefined ? (
            <>
              <Banner
                poster={games[1] && games[1].poster}
                trailer="FKtaOY9lMvM"
                description={games[1] && games[1].description}
                title={games[1] && games[1].name}
                gameId={games[1] && games[1]._id}
              />
              <Banner
                poster={games[2] && games[2].poster}
                trailer="n8i53TtQ6IQ"
                description={games[2] && games[2].description}
                title={games[2] && games[2].name}
                gameId={games[2] && games[2]._id}
                isRight
              />
              <div style={{ padding: "5%" }}>
                <Row>
                  <Col lg={6}>
                    <GameBox
                      poster={games[3] && games[3].poster}
                      title={games[3] && games[3].name}
                      description={games[3] && games[3].description}
                      gameId={games[3] && games[3]._id}
                    />
                  </Col>
                  <Col lg={6}>
                    <GameBox
                      poster={games[5] && games[5].poster}
                      title={games[5] && games[5].name}
                      description={games[5] && games[5].description}
                      gameId={games[5] && games[5]._id}
                    />
                  </Col>
                  <Col lg={6}>
                    <GameBox
                      poster={games[4] && games[4].poster}
                      title={games[4] && games[4].name}
                      description={games[4] && games[4].description}
                      gameId={games[4] && games[4]._id}
                    />
                  </Col>
                  <Col lg={6}>
                    <GameBox
                      poster={games[0] && games[0].poster}
                      title={games[0] && games[0].name}
                      description={games[0] && games[0].description}
                      gameId={games[0] && games[0]._id}
                    />
                  </Col>
                </Row>
              </div>

              <div
                style={{
                  padding: "5%",
                  background: "rgba(234, 234, 234, 0.5)",
                }}
              >
                <div className="text-center">
                  <Text fontSize="4xl" fontWeight="light" color="black">
                    Acclaimed HITS
                  </Text>
                  <Text fontSize="xl" fontWeight="light" color="black">
                    Embark on adventures you won’t find anywhere else –
                    including Marvel’s Spider-Man, God of War, The Last of Us,
                    Dreams Universe and more.
                  </Text>
                </div>
                <div>
                  <Row>
                    <Col>
                      <GameBox
                        poster={games[8] && games[8].poster}
                        title={games[8] && games[8].name}
                        description={games[8] && games[8].description}
                        gameId={games[8] && games[8]._id}
                      />
                    </Col>
                    <Col>
                      <GameBox
                        poster={games[11] && games[11].poster}
                        title={games[11] && games[11].name}
                        description={games[11] && games[11].description}
                        gameId={games[11] && games[11]._id}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <GameBox
                        poster={games[10] && games[10].poster}
                        title={games[10] && games[10].name}
                        description={games[10] && games[10].description}
                        gameId={games[10] && games[10]._id}
                      />
                    </Col>
                    <Col>
                      <GameBox
                        poster={games[9] && games[9].poster}
                        title={games[9] && games[9].name}
                        description={games[9] && games[9].description}
                        gameId={games[9] && games[9]._id}
                      />
                    </Col>
                    <Col>
                      <GameBox
                        poster={games[7] && games[7].poster}
                        title={games[7] && games[7].name}
                        description={games[7] && games[7].description}
                        gameId={games[7] && games[7]._id}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {/* <Container style={{ background: "white", margin: "50px 0" }}>
            <GameSlider games={games} title={"New Games"} />
          </Container> */}
        </>
      )}
    </Loader>
  );
};

export default LatestPage;

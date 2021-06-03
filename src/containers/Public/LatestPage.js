import React, { useEffect } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import Banner from "../../components/Banner";
import GameBox from "../../components/GameBox";
import GameSlider from "../../components/GameSlider";
import { Box, Text, Center } from "@chakra-ui/react";
import HomeBoard from "../../components/HomeBoard";
import UserCart from "../../components/UserCart";

const LatestPage = () => {
  const games = useSelector((state) => state.game.games);
  const game = useSelector((state) => state.game.game);
  const loading = useSelector((state) => state.game.loading);
  return (
    <>
      {game && (
        <>
          {/* <HomeBoard
            name={game.name}
            description={game.description}
            poster={game.poster}
            gameId={game._id}
          /> */}
          {/* <Center
            h="100vh"
            w="100%"
            bg={`url("images/BGTest3.jpg") center  no-repeat `}
            style={{
              zIndex: "5",
            }}
          >
            <Center
              style={{
                height: "400px",
                width: "400px",
                background: "rgba(5,3,33,0.7)",
                borderRadius: "50%",
              }}
            >
              <Text fontSize="lg" fontWeight="extrabold" color="white">
                GAMERSHOP
              </Text>
            </Center>
          </Center> */}
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
                      description={games && games[5].description}
                      gameId={games && games[5]._id}
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
                        poster="images/fifaTest.jpg"
                        title="EA SPORTS FIFA 21"
                        description="Take on everything from street football to official global competitions including the UEFA Champions League."
                      />
                    </Col>
                    <Col>
                      <GameBox
                        poster="images/fifaTest.jpg"
                        title="EA SPORTS FIFA 21"
                        description="Take on everything from street football to official global competitions including the UEFA Champions League."
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <GameBox
                        poster="images/fifaTest.jpg"
                        title="EA SPORTS FIFA 21"
                        description="Take on everything from street football to official global competitions including the UEFA Champions League."
                      />
                    </Col>
                    <Col>
                      <GameBox
                        poster="images/fifaTest.jpg"
                        title="EA SPORTS FIFA 21"
                        description="Take on everything from street football to official global competitions including the UEFA Champions League."
                      />
                    </Col>
                    <Col>
                      <GameBox
                        poster="images/fifaTest.jpg"
                        title="EA SPORTS FIFA 21"
                        description="Take on everything from street football to official global competitions including the UEFA Champions League."
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
    </>
  );
};

export default LatestPage;

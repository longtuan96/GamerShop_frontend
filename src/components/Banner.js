import React from "react";
import { Box, Image, AspectRatio, Text, Button } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
const Banner = ({ poster, trailer, description, title, gameId, isRight }) => {
  return (
    <Box
      p={"5% 10%"}
      style={
        isRight
          ? { background: "rgba(234, 234, 234, 0.5)" }
          : { background: "rgba(255, 255, 255, 0.5)" }
      }
    >
      <Box position="relative" h="auto" w="100%">
        <Image
          src={poster}
          alt="naruto"
          objectFit="cover"
          width={"100%"}
          style={{ zIndex: "100" }}
        />
      </Box>
      <Row>
        {isRight ? (
          <>
            <Col style={{ display: "flex", justifyContent: "end" }}>
              <Box w={"80%"}>
                <div>
                  <Text fontSize="3xl" fontWeight="light">
                    {title}
                  </Text>
                  <Text fontSize="md">{description}</Text>
                </div>
                <Button colorScheme="blue" m={"20px 10px"} borderRadius="50px">
                  Find out more
                </Button>
              </Box>
            </Col>
            <Col lg={5}>
              <Box
                style={{
                  zIndex: "10",
                  position: "relative",
                  bottom: "40%",
                  left: "10%",
                }}
                w={400}
                h={250}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            </Col>
          </>
        ) : (
          <>
            <Col>
              <Box
                style={{
                  zIndex: "10",
                  position: "relative",
                  bottom: "40%",
                  left: "10%",
                }}
                w={400}
                h={250}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            </Col>
            <Col lg={7}>
              <Box w={"80%"}>
                <div>
                  <Text fontSize="3xl" fontWeight="light">
                    {title}
                  </Text>
                  <Text fontSize="md">{description}</Text>
                </div>
                <Button colorScheme="blue" m={"20px 10px"} borderRadius="50px">
                  Find out more
                </Button>
              </Box>
            </Col>
          </>
        )}
      </Row>
    </Box>
  );
};

export default Banner;

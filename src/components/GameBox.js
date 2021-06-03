import React from "react";
import { Box, Image, AspectRatio, Text, Button } from "@chakra-ui/react";
import { useHistory } from "react-router";
const GameBox = ({ poster, title, description, gameId }) => {
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/game/${id}`);
  };
  return (
    <div className="text-center" style={{ width: "100%", marginTop: "10%" }}>
      <Box>
        <Image src={poster} alt="poster" w="100%"></Image>
      </Box>
      <Text fontSize="2xl" fontWeight="light" mt="10px">
        {title}
      </Text>
      <Text fontSize="md" fontWeight="light" mt="10px">
        {description}
      </Text>
      <Button colorScheme="blue" mt="10px" onClick={() => handleClick(gameId)}>
        Find out more
      </Button>
    </div>
  );
};

export default GameBox;

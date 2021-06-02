import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import GameMedia from "../../components/GameMedia";
import SmallGameBox from "../../components/SmallGameBox";
import { Box, Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

const WishList = () => {
  const currentUserFavorite = useSelector(
    (state) => state.user.currentUserFavorite
  );
  return (
    <div>
      <div style={{ padding: "100px" }}>
        <div className="text-center">
          <Text fontSize="5xl" fontWeight="bold">
            WishList
          </Text>
        </div>
        <div>
          <Divider color="gray" mt={4} mb={4} />
          {currentUserFavorite &&
            currentUserFavorite.map((item) => <GameMedia game={item} />)}
        </div>
      </div>
    </div>
  );
};

export default WishList;

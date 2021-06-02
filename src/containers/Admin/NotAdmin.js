import React from "react";
import { Center, Text, Button } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { WarningIcon } from "@chakra-ui/icons";
const NotAdmin = () => {
  const history = useHistory();
  return (
    <Center bg="black" h="100vh" w="100vw">
      <div
        style={{
          width: "500px",
          height: "500px",
          textAlign: "center",
          color: "whitesmoke",
        }}
      >
        <Text fontSize="4xl" fontWeight="bold">
          You are not the admin
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          Please log in with admin account and come back!!
        </Text>

        <Button
          leftIcon={<WarningIcon color="white" />}
          colorScheme="red"
          onClick={() => history.push("/login")}
        >
          Get Out
        </Button>
      </div>
    </Center>
  );
};

export default NotAdmin;

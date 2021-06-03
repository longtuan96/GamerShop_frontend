import React, { useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { gameActions } from "../../redux/actions/game.actions";
import { orderActions } from "../../redux/actions/order.actions";
import { userActions } from "../../redux/actions/user.actions";
import { Box, Text, Divider, Tag, Button } from "@chakra-ui/react";
import { Heart2 } from "react-iconly";
const DetailPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  let isAuthenticated = localStorage.getItem("isAuthenticated");
  const currentUser = useSelector((state) => state.user.currentUser);
  const selectedGame = useSelector((state) => state.game.selectedGame);
  const loading = useSelector((state) => state.order.loading);
  const loadingUser = useSelector((state) => state.user.loading);
  const handleGoBack = () => {
    history.goBack();
  };
  const handleClick = (btn, id) => {
    switch (btn) {
      case "add to cart":
        dispatch(orderActions.addItemCurrentOrder(id));

        break;
      case "add to favorite":
        dispatch(userActions.addToFavorite(id));

        break;
      case "remove from favorite":
        dispatch(userActions.removeFromFavorite(id));

        break;
      case "remove from cart":
        dispatch(orderActions.removeItemCurrentOrder(id));

        break;
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(gameActions.getSingleGame(id));
  }, []);

  const formatCurrency = (number) => {
    if (number)
      return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
  };

  return (
    <>
      {loading === "true" &&
      (selectedGame === undefined ||
        selectedGame === {} ||
        selectedGame === null) ? (
        <h1>LOADING!!!!</h1>
      ) : (
        <>
          <div
            style={{
              zIndex: "100",
              width: "100%",
              height: "100vh",
              position: "relative",
            }}
          >
            <img
              src={selectedGame.poster}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <div
              style={{
                zIndex: "100",
                backgroundColor: "rgb(5,3,33)",
                background: `linear-gradient(90deg, rgba(5,3,33,1) 60%, rgba(0,0,0,0) 100%)`,
                color: "whitesmoke",
                position: "absolute",
                top: "0",
                left: "0",
                width: "50%",
                height: "100%",
                padding: "70px 0 0 50px",
              }}
            >
              <Text fontSize="5xl" fontWeight="bold">
                {selectedGame.name}
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                {selectedGame.publisher}
              </Text>
              <div
                style={{
                  width: "80%",
                  padding: "5% 0",
                }}
              >
                <Divider />
                <Text fontSize="xl" fontWeight="bold">
                  Game Overview
                </Text>
                <Text fontSize="lg">{selectedGame.description}</Text>
                <Divider />
                <Text fontWeight="bold" fontSize="xl" pt={4}>
                  {formatCurrency(selectedGame.price)}
                </Text>
              </div>

              <div style={{ margin: "10px 0" }}>
                {selectedGame.genre &&
                  selectedGame.genre.map((item) => (
                    <>
                      <Tag
                        size="sm"
                        key={item}
                        variant="solid"
                        colorScheme="teal"
                      >
                        {item}
                      </Tag>
                    </>
                  ))}
              </div>

              <div>
                {currentUser &&
                selectedGame &&
                currentUser.cart.games.indexOf(selectedGame._id) === -1 ? (
                  <Button
                    isLoading={loading}
                    variant="solid"
                    colorScheme="blue"
                    isDisabled={
                      isAuthenticated &&
                      currentUser &&
                      selectedGame &&
                      currentUser.ownedGames.indexOf(selectedGame._id) !== -1
                        ? true
                        : false
                    }
                    onClick={() => handleClick("add to cart", selectedGame._id)}
                  >
                    {" "}
                    add to cart
                  </Button>
                ) : (
                  <Button
                    isLoading={loading}
                    variant="solid"
                    colorScheme="red"
                    onClick={() =>
                      handleClick("remove from cart", selectedGame._id)
                    }
                  >
                    {" "}
                    remove from cart
                  </Button>
                )}
                {currentUser.favorite &&
                currentUser.favorite.filter(
                  (item) => item._id === selectedGame._id
                ).length === 0 ? (
                  <Button
                    isLoading={loadingUser}
                    variant="solid"
                    colorScheme="green"
                    onClick={() =>
                      handleClick("add to favorite", selectedGame._id)
                    }
                  >
                    <Heart2 set="curved" primaryColor="blueviolet" />
                  </Button>
                ) : (
                  <Button
                    isLoading={loadingUser}
                    variant="solid"
                    colorScheme="red"
                    onClick={() =>
                      handleClick("remove from favorite", selectedGame._id)
                    }
                  >
                    remove from favorite
                  </Button>
                )}
              </div>

              <Button
                variant="outline"
                colorScheme="red"
                mt={5}
                onClick={handleGoBack}
              >
                Back
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailPage;

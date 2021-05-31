import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import GameSlider from "../../components/GameSlider";

import HomeBoard from "../../components/HomeBoard";
import UserCart from "../../components/UserCart";

const LatestPage = () => {
  const games = useSelector((state) => state.game.games);
  const game = useSelector((state) => state.game.game);

  return (
    <div>
      This is latest page
      {game && (
        <>
          <HomeBoard
            name={game.name}
            description={game.description}
            poster={game.poster}
            gameId={game._id}
          />

          <Container>
            <GameSlider games={games} title={"New Games"} />
          </Container>
        </>
      )}
    </div>
  );
};

export default LatestPage;

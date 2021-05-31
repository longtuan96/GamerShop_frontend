import React from "react";
import GameCloset from "../../components/GameCloset";

const UserLibrary = () => {
  return (
    <div>
      <GameCloset title="Favorites" />
      <GameCloset title="All Games" />
    </div>
  );
};

export default UserLibrary;

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AlertMsg from "../../../components/AlertMsg";
import Footer from "../../../components/Footer";
import NavBarHeader from "../../../components/NavBarHeader";
import { gameActions } from "../../../redux/actions/game.actions";
import CollectionPage from "../../Public/CollectionPage";
import DetailPage from "../../Public/DetailPage";
import LatestPage from "../../Public/LatestPage";

import LoginPage from "../../Public/LoginPage";

import RegisterPage from "../../Public/RegisterPage";
import PrivateRoute from "../PrivateRoute";

const PublicLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameActions.getAllGames());
  }, []);
  return (
    <>
      <NavBarHeader />
      <AlertMsg />
      <Switch>
        <Route exact path="/latest" component={LatestPage} />
        <Route exact path="/collection" component={CollectionPage} />
        <Route exact path="/game/:id" component={DetailPage} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

export default PublicLayout;

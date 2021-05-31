import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";
import AlertMsg from "../../../components/AlertMsg";
import Footer from "../../../components/Footer";
import NavBarHeader from "../../../components/NavBarHeader";
import { gameActions } from "../../../redux/actions/game.actions";
import { userActions } from "../../../redux/actions/user.actions";

import CollectionPage from "../../Public/CollectionPage";
import DealsPage from "../../Public/DealsPage";
import DetailPage from "../../Public/DetailPage";
import LatestPage from "../../Public/LatestPage";

import LoginPage from "../../Public/LoginPage";

import RegisterPage from "../../Public/RegisterPage";
import SearchPage from "../../Public/SearchPage";
import PrivateRoute from "../PrivateRoute";

const PublicLayout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    dispatch(gameActions.getGames());
    dispatch(userActions.getCurrentUser());
    history.push("/latest");
  }, []);

  return (
    <>
      <NavBarHeader />
      <AlertMsg />
      {loading ? (
        <h1>Loading!!!!</h1>
      ) : (
        <Switch>
          <Route exact path="/latest" component={LatestPage} />
          <Route exact path="/deals" component={DealsPage} />
          <Route exact path="/collection" component={CollectionPage} />
          <Route exact path="/game/:id" component={DetailPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      )}
      <Footer />
    </>
  );
};

export default PublicLayout;

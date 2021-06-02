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
import GenrePage from "../../Public/GenrePage";
import LatestPage from "../../Public/LatestPage";
import LoginPage from "../../Public/LoginPage";
import RegisterPage from "../../Public/RegisterPage";

import SearchPage from "../../Public/SearchPage";
import WishList from "../../Public/WishList";

const PublicLayout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    dispatch(gameActions.getGames());
    if (localStorage.getItem("accessToken")) {
      dispatch(userActions.getCurrentUser());
    }
    history.push("/latest");
  }, []);

  return (
    <div style={{ background: `url("Bg.jpg") repeat fixed center` }}>
      <NavBarHeader />
      <AlertMsg />
      {loading ? (
        <h1>Loading!!!!</h1>
      ) : (
        <div>
          <Switch>
            <Route exact path="/latest" component={LatestPage} />
            <Route exact path="/deals" component={DealsPage} />
            <Route exact path="/collection" component={CollectionPage} />
            <Route exact path="/game/:id" component={DetailPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/genre/:id" component={GenrePage} />
            <Route exact path="/wishlist" component={WishList} />
          </Switch>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PublicLayout;

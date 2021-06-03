import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../redux/actions/game.actions";
import Pagination from "react-pagination-library";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router";
const GamesPage = () => {
  const [searchData, setSearchData] = useState({
    name: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    currentPage: 1,
  });

  //useState
  const [formData, setFormData] = useState({
    name: null,
    description: null,
    release_date: null,
    player_mode: null,
    platform: null,
    poster: null,
    picture: null,
    icon: null,
    publisher: null,
    status: null,
    genre: null,
    languages: null,
    discount: null,
    additionalInfo: null,
    price: null,
  });

  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [id, setId] = useState("");
  //useSelector
  const allGames = useSelector((state) => state.game.allGames);
  const totalPages = useSelector((state) => state.game.totalPages);
  //Functions
  const clearFormData = () => {
    setFormData({
      name: null,
      description: null,
      release_date: null,
      player_mode: null,
      platform: null,
      poster: null,
      picture: null,
      icon: null,
      publisher: null,
      status: null,
      genre: null,
      languages: null,
      discount: null,
      additionalInfo: null,
      price: null,
    });
  };

  //handle functions
  const handleClose = () => {
    setShow(false);
    // dispatch(gameActions.getAllGames());
  };
  const handleShow = (btnName, itemId) => {
    clearFormData();
    setId(itemId);
    setModalTitle(btnName);
    setShow(true);
  };
  //For pagination
  const changeCurrentPage = (numPage) => {
    setState({ currentPage: numPage });
    dispatch(gameActions.getAllGames(searchData.name, numPage));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalTitle === "Modify Game") {
      dispatch(gameActions.updateGame(id, formData));
    } else if (modalTitle === "Add Game") {
      dispatch(gameActions.addGame(formData));
    }
    dispatch(gameActions.getAllGames());
    setShow(false);
  };
  const handleDelete = (id) => {
    dispatch(gameActions.deleteGame(id));
  };

  const handleChangeSearch = (e) => {
    setSearchData({ name: e.target.value });
  };
  const handleSearchSubmit = () => {
    dispatch(gameActions.getAllGames(searchData.name));
  };
  //useEffect
  useEffect(() => {
    dispatch(gameActions.getAllGames(""));
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
      <div style={{ padding: "5%" }}>
        <Text pb={4} fontSize="2xl" fontWeight="bold">
          ADDED GAMES
        </Text>
        <Button variant="primary" onClick={() => handleShow("Add Game")}>
          Add Game
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Icon</th>
              <th>Name of Game</th>
              <th>Publisher</th>
              <th>Status</th>
              <th>Discount</th>
              <th>Price</th>
              <th>Delete?</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allGames === [] || allGames === null || allGames === undefined ? (
              <h1>There are no games</h1>
            ) : (
              allGames.map((item, itemIndex) => (
                <tr key={item._id}>
                  <td>{itemIndex + 1}</td>
                  <td>
                    <img src={item.icon} alt="icon" style={{ width: "40px" }} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.publisher}</td>
                  <td>{item.status}</td>
                  <td>{`${item.discount}%`}</td>
                  <td>{item.price && formatCurrency(item.price)}</td>
                  <td>{item.isDeleted ? "Yes" : "No"}</td>
                  <td className="">
                    <Button
                      style={{ margin: "2px" }}
                      onClick={() => handleShow("Modify Game", item._id)}
                    >
                      Modify
                    </Button>
                    <Button
                      style={{ margin: "2px" }}
                      onClick={() => handleShow("Delete Game", item._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <Row style={{ width: "100%" }}>
          <Col></Col>
          <Col>
            <Pagination
              currentPage={state.currentPage}
              totalPages={totalPages}
              changeCurrentPage={changeCurrentPage}
              theme="bottom-border"
            />
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <IconButton
                      aria-label="Search database"
                      variant="unstyled"
                      icon={<SearchIcon color="gray.300" />}
                      onClick={handleSearchSubmit}
                    />
                  }
                />
                <Input
                  type="text"
                  placeholder="Search"
                  name="name"
                  onChange={handleChangeSearch}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSearchSubmit();
                    }
                  }}
                />
              </InputGroup>
            </FormControl>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          {modalTitle === "Modify Game" ? (
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New Name"
                    name="name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New description"
                    name="description"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formReleaseDate">
                  <Form.Label>Release Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="New release date"
                    name="release_date"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlayerMode">
                  <Form.Label>Player Mode</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New player mode"
                    name="player_mode"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPlatform">
                  <Form.Label>Platform</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New platform"
                    name="platform"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPoster">
                  <Form.Label>Poster</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Poster Link"
                    name="poster"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPicture">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Picture Link"
                    name="picture"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formIcon">
                  <Form.Label>Icon</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Icon Link"
                    name="icon"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPublisher">
                  <Form.Label>Publisher</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Publisher"
                    name="publisher"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New status"
                    name="status"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGenre">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New genre"
                    name="genre"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLanguages">
                  <Form.Label>Languages</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New Language"
                    name="languages"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDiscount">
                  <Form.Label>Discount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New discount"
                    name="discount"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAdditionalInfo">
                  <Form.Label>Additional Infos</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New Infos"
                    name="additionalInfo"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="New price"
                    name="price"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Modal.Footer>
            </Form>
          ) : modalTitle === "Delete Game" ? (
            <>
              <Modal.Body>
                <p>ARE YOU SURE YOU WANT TO DELETE THIS GAME?</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => handleDelete(id)}>
                  Yes
                </Button>
              </Modal.Footer>
            </>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New description"
                    name="description"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formReleaseDate">
                  <Form.Label>Release Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="New release date"
                    name="release_date"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlayerMode">
                  <Form.Label>Player Mode</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New player mode"
                    name="player_mode"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPlatform">
                  <Form.Label>Platform</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New platform"
                    name="platform"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPoster">
                  <Form.Label>Poster</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Poster Link"
                    name="poster"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPicture">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Picture Link"
                    name="picture"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formIcon">
                  <Form.Label>Icon</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Icon Link"
                    name="icon"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPublisher">
                  <Form.Label>Publisher</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Publisher"
                    name="publisher"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New status"
                    name="status"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGenre">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New genre"
                    name="genre"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLanguages">
                  <Form.Label>Languages</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New Language"
                    name="languages"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDiscount">
                  <Form.Label>Discount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New discount"
                    name="discount"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAdditionalInfo">
                  <Form.Label>Additional Infos</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New Infos"
                    name="additionalInfo"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="New price"
                    name="price"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Add
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Modal>
      </div>
    </>
  );
};

export default GamesPage;

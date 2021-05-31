import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../redux/actions/order.actions";

const UserCart = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentOrder = useSelector((state) => state.order.currentOrder);
  const subTotal = useSelector((state) => state.order.subTotal);
  const discount = useSelector((state) => state.order.discount);
  const loading = useSelector((state) => state.order.loading);

  const handleClick = (btnName, id) => {
    switch (btnName) {
      case "remove":
        dispatch(orderActions.removeItemCurrentOrder(id));
        break;
      case "payment":
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(orderActions.getCurrentOrder());
  }, []);
  useEffect(() => {
    setTotal(subTotal - discount);
  }, [loading]);
  return (
    <>
      {loading ? (
        <h1>Loading!!!!</h1>
      ) : (
        <>
          <div>
            {currentUser === null ||
            currentUser === undefined ||
            currentUser === {} ? (
              <h3>Please log in first</h3>
            ) : (
              <>
                <h1>Confirm Purchase</h1>
                <Table>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>{subTotal}</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td>{discount}</td>
                    </tr>
                    <tr>
                      <td>Total </td>
                      <td>{total}</td>
                    </tr>
                  </tbody>
                </Table>
                <div>
                  <h4>Payment Method</h4>
                  <div className="d-flex">
                    <img src="" alt="icon COD" />
                    <div>
                      <p>{currentUser.balance}</p>
                      <p>Your Wallet</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h1>summary</h1>
                  {currentOrder.games &&
                    currentOrder.games.map((item) => (
                      <div key={item._id}>
                        <div className="d-flex">
                          <img
                            src={item.icon}
                            alt="game icon"
                            style={{ width: "40px" }}
                          />
                          <div>
                            <strong>{item.name}</strong>
                            <div className="d-flex">
                              {item.discount !== 0 ? (
                                <>
                                  <div>{`-${item.discount}%`}</div>
                                  <div>{`$${
                                    (item.price * item.discount) / 100
                                  }`}</div>
                                  <div>{`$${item.price}`}</div>
                                </>
                              ) : (
                                <p>{`$${item.price}`}</p>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => handleClick("remove", item._id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
                <hr />
                <div>
                  <p>
                    By selecting [Confirm Purchase] you agree to complete the
                    purchase in accordance with the Terms of Service before
                    using this content
                  </p>
                  <button onClick={() => handleClick("payment")}>
                    Confirm Purchase
                  </button>{" "}
                </div>{" "}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default UserCart;

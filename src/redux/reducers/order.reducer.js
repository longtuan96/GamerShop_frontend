import * as types from "../constants/order.constants";

const initialState = {
  loading: false,
  currentOrder: {},
  subTotal: 0,
  discount: 0,
  order: {},
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ORDER_ADDITEM_REQUEST:
    case types.ORDER_REMOVEITEM_REQUEST:
    case types.ORDER_GETSINGLE_REQUEST:
    case types.ORDER_GETCURRENT_REQUEST:
      return { ...state, loading: true };

    case types.ORDER_GETSINGLE_SUCCESS:
      return {
        ...state,
        order: payload,
        loading: false,
      };
    case types.ORDER_REMOVEITEM_SUCCESS:
    case types.ORDER_ADDITEM_SUCCESS:
      return {
        ...state,

        loading: false,
      };
    case types.ORDER_GETCURRENT_SUCCESS:
      console.log("======", payload);
      return {
        ...state,
        currentOrder: payload,
        subTotal: payload.games.reduce(
          (sum, current) => sum + current.price,
          0
        ),
        discount: payload.games.reduce(
          (sum, current) => sum + (current.price * current.discount) / 100,
          0
        ),

        loading: false,
      };

    case types.ORDER_GETSINGLE_FAILURE:
      console.log("Error in get single order!!=>", payload);
      return { ...state, loading: false };

    case types.ORDER_GETCURRENT_FAILURE:
      console.log("Error in get current order!!=>", payload);
      return { ...state, loading: false };

    case types.ORDER_ADDITEM_FAILURE:
      console.log("Error in add item to order!!=>", payload);
      return { ...state, loading: false };
    case types.ORDER_REMOVEITEM_FAILURE:
      console.log("Error in remove item from order!!=>", payload);
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default orderReducer;

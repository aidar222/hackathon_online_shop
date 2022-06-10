import React, { createContext, useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsFavourite,
} from "../Components/Help/favouriteFunctions";

export const favouriteContext = createContext();

const INIT_STATE = {
  favourite: {},
  favouriteLength: getCountProductsFavourite(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_FAVOURITE":
      return { ...state, favourite: action.payload };
    case "CHANGE_FAVOURITE_COUNT":
      return { ...state, favouriteLength: action.payload };
    default:
      return state;
  }
};

const FavouriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductToFavourite = (productItem) => {
    let favourite = JSON.parse(localStorage.getItem("favourite"));
    if (!favourite) {
      favourite = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: productItem,
      count: 1,
      subPrice: 0,
    };

    let filterFavourite = favourite.products.filter((elem) => {
      return elem.item.id === productItem.id;
    });

    if (filterFavourite.length > 0) {
      favourite.products = favourite.products.filter((elem) => {
        return elem.item.id !== productItem.id;
      });
    } else {
      favourite.products.push(newProduct);
    }

    newProduct.subPrice = calcSubPrice(newProduct);
    favourite.totalPrice = calcTotalPrice(favourite.products);

    localStorage.setItem("cart", JSON.stringify(favourite));

    dispatch({
      type: "CHANGE_FAVOURITE_COUNT",
      payload: favourite.products.length,
    });
  };

  const getfavourite = () => {
    let favourite = JSON.parse(localStorage.getItem("favourite"));
    if (!favourite) {
      favourite = {
        products: [],
      };
    }

    dispatch({
      type: "GET_FAVOURITE",
      payload: favourite,
    });
  };

  const deleteFavouriteProduct = (id) => {
    let favourite = JSON.parse(localStorage.getItem("favourite"));
    favourite.products = favourite.products.filter(
      (elem) => elem.item.id !== id
    );
    favourite.totalPrice = calcTotalPrice(favourite.products);
    localStorage.setItem("favourite", JSON.stringify(favourite));
    getfavourite();
  };

  function changeProductCount(id, count) {
    let favourite = JSON.parse(localStorage.getItem("favourite"));
    favourite.products = favourite.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    favourite.totalPrice = calcTotalPrice(favourite.products);
    localStorage.setItem("favourite", JSON.stringify(favourite));
    getfavourite();
  }

  return (
    <favouriteContext.Provider
      value={{
        favourite: state.favourite,
        favouriteLenght: state.favouriteLength,
        addProductToFavourite,
        getfavourite,
        deleteFavouriteProduct,
        changeProductCount,
      }}
    >
      {children}
    </favouriteContext.Provider>
  );
};

export default FavouriteContextProvider;

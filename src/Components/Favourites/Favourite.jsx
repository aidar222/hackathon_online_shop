import React, { useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { favouriteContext } from "../../Context/FavouriteContext";
// import "./Cart.css";
import { NavLink } from "react-router-dom";
// import { cartContext } from "../../context/CartContext";

const Favourite = () => {
  const {
    favourite,
    getFavourite,
    deleteFavouriteProduct,
    changeProductCount,
  } = useContext(favouriteContext);

  useEffect(() => {
    getFavourite();
  }, []);

  return (
    <div className="favourite">
      {favourite.products ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Фото</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Сумма продукта</th>
              </tr>
            </thead>
            <tbody>
              {favourite.products.map((elem) => (
                <tr key={elem.item.id}>
                  <td>
                    <img src={elem.item.img1} alt="product img" />
                  </td>
                  <td>{elem.item.title}</td>
                  <td>{elem.item.price}</td>
                  <td>
                    <input
                      value={elem.count}
                      type="number"
                      onChange={(e) =>
                        changeProductCount(elem.item.id, e.target.value)
                      }
                    />
                  </td>
                  <td>{elem.subPrice}</td>
                  <td>
                    <button
                      onClick={() => deleteFavouriteProduct(elem.item.id)}
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Общая сумма: {favourite.totalPrice}</h4>

          <NavLink to="/payment">
            <Button>Оформить заказ</Button>
          </NavLink>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Favourite;

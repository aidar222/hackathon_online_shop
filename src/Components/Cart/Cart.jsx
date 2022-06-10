import React, { useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { cartContext } from "../../Context/CartContext";
import "./Cart.css";
import { NavLink } from "react-router-dom";
// import { cartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, getCart, deleteCartProduct, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="cart">
      {cart.products ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Фото</th>
                <th>Название</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((elem) => (
                <tr key={elem.item.id}>
                  <td>
                    <img src={elem.item.image} alt="product img" />
                  </td>
                  <td>{elem.item.title}</td>
                  <td>{elem.item.price}</td>
                  <td>{elem.subPrice}</td>
                  <td>
                    <button
                      className="btnDelete"
                      onClick={() => deleteCartProduct(elem.item.id)}
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <NavLink to="/error">
            <button className="btnPay">Купить</button>
          </NavLink>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Cart;
// const Cart = () => {
//   const { cart, getCart, deleteCartProduct, changeProductCount } =
//     useContext(cartContext);

//   useEffect(() => {
//     getCart();
//   }, []);

//   return (
//     <div className="cart">
//       {cart.products ? (
//         <div>
//           <table>
//             <tbody>
//               {cart.products.map((elem) => (
//                 <tr key={elem.item.id}>
//                   <td>
//                     <img src={elem.item.image} alt="product img" />
//                   </td>
//                   <td className="tdCart">{elem.item.title}</td>
//                   <td className="tdCart">{elem.item.price}</td>
//                   <td className="tdCart">{elem.subPrice}</td>
//                   <td>
//                     <button onClick={() => deleteCartProduct(elem.item.id)}>
//                       Удалить
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <h4>Общая сумма: {cart.totalPrice}</h4>

//           <NavLink to="/payment">
//             <Button>Оформить заказ</Button>
//           </NavLink>
//         </div>
//       ) : (
//         <h2>Loading...</h2>
//       )}
//     </div>
//   );
// };

// export default Cart;

// Newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

// if (localStorage.getItem("topics")) {
//   localStorage.setItem("topics", JSON.stringify([]));
// }

// let myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
//   keyboard: false,
// });

// document
//   .querySelector("button.addTopic-btn")
//   .addEventListener("click", function (e) {
//     let title = document.getElementById("topics_title").value;
//     let typeOfMovie = document.getElementById("topics_typeOfMovie").value;
//     let description = document.getElementById("topics_description").value;
//     let price = document.getElementById("topics_price").value;
//     let image = document.getElementById("topics_image").value;
//     let cast = document.getElementById("topics_cast").value;
//     if (title && typeOfMovie && description && price && image && cast) {
//       document.getElementById("topics_title").value = "";
//       document.getElementById("topics_typeOfMovie").value = "";
//       document.getElementById("topics_description").value = "";
//       document.getElementById("topics_price").value = "";
//       document.getElementById("topics_image").value = "";
//       document.getElementById("topics_cast").value = "1";
//       let topics = JSON.parse(localStorage.getItem("topics"));
//       topics.push([
//         "topic_" + topics.length,
//         title,
//         typeOfMovie,
//         description,
//         price,
//         image,
//         cast,
//         0,
//         0,
//         0,
//       ]);
//       localStorage.setItem("topics", JSON.stringify(topics));
//       // update_topics
//       myModal.hide();
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Ошибка",
//         text: "Пожалуйста заполните все поля!",
//       });
//     }
//   });

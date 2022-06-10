export function getCountProductsFavourite() {
  let favourite = JSON.parse(localStorage.getItem("favourite"));
  return favourite ? favourite.products.length : 0;
}

export function calcSubPrice(product) {
  return product.count * product.item.price;
}

export function calcTotalPrice(products) {
  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.subPrice;
  });
  return totalPrice;
}

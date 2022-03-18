export default function (cart = [], action) {
  if (action.type == "addToCart") {
    var cartCopy = [...cart];
    var findArticle = false;

    for (let i = 0; i < cartCopy.length; i++) {
      if (cartCopy[i]._id == action.articleBasket._id) {
        findArticle = true;
      }
    }

    if (!findArticle) {
      cartCopy.push(action.articleBasket);
    }
    return cartCopy;
  } else if (action.type == "deleteArticle") {
    var cartCopy = cart.filter((element) => element._id != action.article._id);

    return cartCopy;
  } else if (action.type == "increaseQuantity") {
    var cartCopy = [...cart];
    for (let i = 0; i < cartCopy.length; i++) {
      if (cartCopy[i]._id == action.article._id) {
        cartCopy[i].quantity = cartCopy[i].quantity + 1;
      }
    }
    return cartCopy;
  } else if (action.type == "decreaseQuantity") {
    var cartCopy = [...cart];
    for (let i = 0; i < cartCopy.length; i++) {
      if (cartCopy[i]._id == action.article._id && cartCopy[i].quantity > 1) {
        cartCopy[i].quantity = cartCopy[i].quantity - 1;
      }
    }
    return cartCopy;
  } else {
    return cart;
  }
}

export default function (cart = [], action) {
  if (action.type == "addToCart") {
    //console.log("addtocart reduc", action.articleBasket);
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
  } else {
    return cart;
  }
}

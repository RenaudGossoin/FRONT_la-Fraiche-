export default function (cart = [], action) {
  if (action.type == "ValidateCart") {
    return action.article;
  } else {
    return cart;
  }
}

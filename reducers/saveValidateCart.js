export default function (cart = [], action) {
    if (action.type == "ValidateCart") {
     console.log("ValidateCart reduc", action.article);
  
      return action.article;
    } else {
      return cart;
    }
  }
  
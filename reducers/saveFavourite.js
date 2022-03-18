export default function (fav = [], action) {
  if (action.type == "onAddToFavourite") {
    var favCopy = [...fav];
    var findArticle = false;
    // console.log("1er FavCopy de SaveFavourite",favCopy)
    for (let i = 0; i < favCopy.length; i++) {
      if (favCopy[i]._id == action.element._id) {
        findArticle = true;
      }
    }

    if (!findArticle) {
      favCopy.push(action.element);
    }
    console.log("2eme FavCopy de SaveFavourite", favCopy);
    return favCopy;
  } else {
    return fav;
  }
}

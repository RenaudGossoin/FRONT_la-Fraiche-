export default function (categorie = "", action) {
  if (action.type == "saveCategorie") {
    return action.categorie;
  } else {
    return categorie;
  }
}

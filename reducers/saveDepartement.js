export default function (departement = "", action) {
  if (action.type == "saveDepartement") {
    return action.departement;
  } else {
    return departement;
  }
}

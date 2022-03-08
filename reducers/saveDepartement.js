export default function (departement = "", action) {
  if (action.type == "saveDepartement") {
    // console.log("test:",action.departement);
    return action.departement;
  } else {
    return departement;
  }
}

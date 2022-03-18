export default function (locker = "", action) {
  if (action.type == "selectedId") {
    return action.locker;
  } else {
    return locker;
  }
}

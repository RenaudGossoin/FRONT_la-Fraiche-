export default function (locker = '', action) {
    if (action.type == "selectedId") {
      console.log("selectedId", action.locker);
      return action.locker;
    } else {
      return locker;
    }
  }
  
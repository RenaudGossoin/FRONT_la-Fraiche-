export default function (count = 1, action) {
  if (action.type === "increase") {
    return count + 1;
  } else if (action.type === "decrease") {
    return count - 1;
  } else {
    return count;
  }
}

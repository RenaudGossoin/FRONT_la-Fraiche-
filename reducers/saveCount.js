export default function (count = 0, action) {
  if (action.type === "increase") {
    //console.log("count:", count + 1);
    count = action.element + 1;
    // console.log("countinc", count);
    return count;
  } else if (action.type === "decrease") {
    count = action.element - 1;
    // console.log("countdec", count);
    return count;
  } else {
    return count;
  }
}

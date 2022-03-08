export default function (count = 1, action) {
  if (action.type === "increase") {
    console.log("count:", count + 1);


    return count+1;
  } else if (action.type === "decrease") {
    console.log("countdec", count);
    return count-1;
  } else {
    return count;
  }
}
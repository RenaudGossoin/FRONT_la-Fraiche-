export default function (articleLike = [], action) {
  if (action.type == "showArticle") {
    //console.log("action.detail :", action.showarticle);
    return action.showarticle;
  } else {
    return articleLike;
  }
}

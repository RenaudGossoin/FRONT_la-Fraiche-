export default function (articleLike = [], action) {
  if (action.type == "showArticle") {
    return action.showarticle;
  } else {
    return articleLike;
  }
}

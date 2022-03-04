export default function (article = [], action) {
  if (action.type == "addArticle") {
    return action.article;
  } else {
    return article;
  }
}

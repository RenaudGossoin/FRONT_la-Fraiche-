export default function (state = initialState, action) {
    if (action.type == "saveHeartColor") {
      //console.log("action.detail :", action.showarticle);
      return action.showarticle;
    } else {
      return articleLike;
    }
  }
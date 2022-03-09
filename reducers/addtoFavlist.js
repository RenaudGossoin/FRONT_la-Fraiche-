
export default function(favlist =[], action) {
    
    if(action.type == "addtoFavlist") {
    //    console.log("addtofavlist reduc", action.articleFavorite)
        var favListCopy = [...favlist];
        var findArticle = false;

        for(let i = 0 ; i<favListCopy.length ; i++){
            if(favListCopy[i]._id == action.articleFavorite._id){
                findArticle = true
            }
        }

        if(!findArticle){
            favListCopy.push(action.articleFavorite)
        }
        return favListCopy;
    } else if (action.type == "deleteArticleFavori") {
        var favListCopy = favlist.filter((element) => element._id != action.article._id);
        return favListCopy;
   
    } else {
        return favlist
        }
}
        


    
//     // else if(action.type == 'deleteArticle'){
//     //     var wishListCopy = [...wishList]
//     //     var position = null

//     //     for(let i=0;i<wishListCopy.length;i++){
//     //         if(wishListCopy[i].title == action.title){
//     //             position = i
//     //         }
//     //     }
//     //     if(position != null){
//     //         wishListCopy.splice(position,1)
//     //     }

//     //     return wishListCopy
        


// export default function(favlist =[], action) {
    
//     if(action.type == "addtoFavlist") {
//        console.log("addtofavlist reduc", action.articleFavorite)
//         var favListCopy = [...favlist];
//         var findArticle = false;

//         for(let i = 0 ; i<favListCopy.length ; i++){
//             if(favListCopy[i]._id == action.articleFavorite._id){
//                 findArticle = true
//             }
//         }

//         if(!findArticle){
//             favListCopy.push(action.articleFavorite)
//         }
//         return favListCopy;
        
//     } else  {
//         return favlist
//         }
//         }

// export default function(state = [], action){

//     if(action.type == 'addFavArticle'){
//         var favListCopy = [...state]
//         // var favListCopy = [...favlist]
//         var findArticle = false

//         for(let i=0;i<favListCopy.length;i++){
//             if(favListCopy[i].nom == action.articleLiked.nom){
//                 findArticle = true
//             }
//         }

//         if(!findArticle){
//             favListCopy.push(action.articleLiked)
//         }
        
       
//         return favListCopy;
        
//     } 
    
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
        
//     // } else {
//     //     return wishList
//     // }
// }
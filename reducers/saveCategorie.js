
export default function(categorie="", action) {
    if(action.type == 'saveCategorie') {
        console.log("console.log du reducer ",action);
        console.log("action.categorie :",action.categorie)
        return action.categorie
    
    } else {
        return categorie;
    }
}
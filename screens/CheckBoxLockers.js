import React, { useState } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import {connect} from 'react-redux';
//Le choix des lockers sont fait en dur... Trop compliqué de pouvoir les selectionnés un à un. AB 


//pr disable si plus de 1 checkbox, maper sur [checkbox] et verifier if checkbox [i] === true, alors trouver le moyen de disable le button confirm.
//faire un [etat isDisable]
export default function CheckBoxLockers(props) {

    const [checkBox, setCheckBox] = useState([false, false, false,false,false,false,false,false]);
   /* const [isDisabled, setIsDisabled] = useState(false)
    
    for (var i=0; i<checkBox.length; i++) {
        if(checkBox>=2){
            setIsDisabled = true
        } 
    }*/
   
    return (

        

        <View>

            <CheckBox
        title="La boîte à meuh Paris Grenelle - 44 Rue de la Fédération, 75015 Paris "

        checked={checkBox[0]}
                onPress={() => setCheckBox([!checkBox[0], checkBox[1], checkBox[2],checkBox[3],checkBox[4],checkBox[5],checkBox[6],checkBox[7]])}
            />

            <CheckBox
        title="La boîte à meuh Paris Hauteville - 3 Place Franz Liszt, 75010 Paris"
        checked={checkBox[1]}
                onPress={() => setCheckBox([checkBox[0], !checkBox[1], checkBox[2],checkBox[3],checkBox[4],checkBox[5],checkBox[6],checkBox[7]])}
            />

            <CheckBox
        title="La boîte à meuh Paris Saint Augustin - 8 Rue de la Michodière, 75002 Paris"
        checked={checkBox[2]}
                onPress={() => setCheckBox([checkBox[0], checkBox[1], !checkBox[2],checkBox[3],checkBox[4],checkBox[5],checkBox[6],checkBox[7]])}
            />
            <CheckBox
        title=
        "La boîte à meuh Paris Jaures - 15 Rue de l'Ourcq, 75019 Paris"
        checked={checkBox[3]}
                onPress={() =>setCheckBox([checkBox[0], checkBox[1], checkBox[2],!checkBox[3],checkBox[4],checkBox[5],checkBox[6],checkBox[7]])}
            />
            <CheckBox
        title="La boîte à meuh Paris Saint Martin - 13 Boulevard de Strasbourg, 75010 Paris"
        checked={checkBox[4]}
                onPress={() => setCheckBox([checkBox[0], checkBox[1], checkBox[2],checkBox[3],!checkBox[4],checkBox[5],checkBox[6],checkBox[7]])}
            />
            <CheckBox
        title="La boîte à meuh Parmentier - 7b Rue Lechevin, 75011 Paris"
        checked={checkBox[5]}
                onPress={() => setCheckBox([checkBox[0], checkBox[1], checkBox[2],checkBox[3],checkBox[4],!checkBox[5],checkBox[6],checkBox[7]])}
            />
            <CheckBox
        title="La boîte à meuh Bastille - 9 Rue des Minimes, 75003 Paris,"
        checked={checkBox[6]}
                onPress={() => setCheckBox([checkBox[0], checkBox[1], checkBox[2],checkBox[3],checkBox[4],checkBox[5],!checkBox[6],checkBox[7]])}
            />
            <CheckBox
        title="La boîte à meuh Saint André Beaux Arts - 27 Quai des Grands Augustins, 75006 Paris"
        checked={checkBox[7]}
                onPress={() => setCheckBox([checkBox[0], checkBox[1], checkBox[2],checkBox[3],checkBox[4],checkBox[5],checkBox[6],!checkBox[7]])}
            />

        </View>
    )
}

/*function mapDispatchToProps(dispatch) {
    return {
      onKeepCheck: function(check) {
          dispatch( {type: 'saveCheck', check} )
      }
    }
   }
   export default connect(null, mapDispatchToProps)(CheckBoxLockers);*/
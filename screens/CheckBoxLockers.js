import React, { useState } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';

//Le choix des lockers sont fait en dur... Trop compliqué de pouvoir les selectionnés un à un. AB 



export default function CheckBoxLockers(props) {

    const [checkBox, setCheckBox] = useState(false);
    const [check, setCheck] = useState(false);
    const [checkB, setCheckB] = useState(false);
    const [checko, setChecko] = useState(false);
    const [checkx, setCheckX] = useState(false);
    const [choix, setChoix] = useState(false);
    const [choice, setChoice] = useState(false);
    const [box, setBox] = useState(false);
        
    const lecheckbox = () => {
        setCheckBox(true);
        setCheck(false);
        setCheckB(false);
        setChecko(false);
        setCheckX(false);
        setChoix(false);
        setChoice(false);
        setBox(false);
    }
    const leBox = () => {
        setCheckBox(false);
        setCheck(false);
        setCheckB(false);
        setChecko(false);
        setCheckX(false);
        setChoix(false);
        setChoice(false);
        setBox(true);
    }
    const lecheck = () => {
        setCheckBox(false);
        setCheck(true);
        setCheckB(false);
        setChecko(false);
        setCheckX(false);
        setChoix(false);
        setChoice(false);
        setBox(false);
    }
    const lecheckB = () => {
        setCheckBox(false);
        setCheck(false);
        setCheckB(true);
        setChecko(false);
        setCheckX(false);
        setChoix(false);
        setChoice(false);
        setBox(false);
    }
    const lechecko = () => {
        setCheckBox(false);
        setCheck(false);
        setCheckB(false);
        setChecko(true);
        setCheckX(false);
        setChoix(false);
        setChoice(false);
        setBox(false);
    }
    const lecheckX = () => {
        setCheckBox(false);
        setCheck(false);
        setCheckB(false);
        setChecko(false);
        setCheckX(true);
        setChoix(false);
        setChoice(false);
        setBox(false);
    }
    const lecheckChoix = () => {
        setCheckBox(false);
        setCheck(false);
        setCheckB(false);
        setChecko(false);
        setCheckX(false);
        setChoix(true);
        setChoice(false);
        setBox(false);
    }
    const lecheckChoice = () => {
        setCheckBox(false);
        setCheck(false);
        setCheckB(false);
        setChecko(false);
        setCheckX(false);
        setChoix(false);
        setChoice(true);
        setBox(false);
    }

    return (

        

        <View>

            <CheckBox
        title="La boîte à meuh Paris Grenelle - 44 Rue de la Fédération, 75015 Paris "

        checked={checkBox}
                onPress={lecheckbox}
            />

            <CheckBox
        title="La boîte à meuh Paris Hauteville - 3 Place Franz Liszt, 75010 Paris"
        checked={check}
                onPress={lecheck}
            />

            <CheckBox
        title="La boîte à meuh Paris Saint Augustin - 8 Rue de la Michodière, 75002 Paris"
        checked={checkB}
                onPress={lecheckB}
            />
            <CheckBox
        title=
        "La boîte à meuh Paris Jaures - 15 Rue de l'Ourcq, 75019 Paris"
        checked={checko}
                onPress={lechecko}
            />
            <CheckBox
        title="La boîte à meuh Paris Saint Martin - 13 Boulevard de Strasbourg, 75010 Paris"
        checked={checkx}
                onPress={lecheckX}
            />
            <CheckBox
        title="La boîte à meuh Parmentier - 7b Rue Lechevin, 75011 Paris"
        checked={choix}
                onPress={lecheckChoix}
            />
            <CheckBox
        title="La boîte à meuh Bastille - 9 Rue des Minimes, 75003 Paris,"
        checked={choice}
                onPress={lecheckChoice}
            />
            <CheckBox
        title="La boîte à meuh Saint André Beaux Arts - 27 Quai des Grands Augustins, 75006 Paris"
        checked={box}
                onPress={leBox}
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
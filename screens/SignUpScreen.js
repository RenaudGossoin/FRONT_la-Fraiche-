import React from 'react';
import {useState} from 'react';
import { View, Text,StyleSheet, ImageBackground, TextInput, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

function SignUpScreen (props) {

  const [signUpUsername, setSignUpUsername] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpDepartement, setSignUpDepartement] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')

  const [userExists, setUserExists] = useState(false)

  const [listErrorsSignup, setErrorsSignup] = useState([])

  var handleSubmitSignup = async () => {

 
    const data = await fetch('/sign-up', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
       body: `usernameFromFront=${signUpUsername}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}&departementFromFront=${signUpDepartement}`
      
      
    })

    

    console.log(data)

    const body = await data.json()

    if(body.result == true){
      setUserExists(true)
    } else {
      setErrorsSignup(body.error)
    }
  }

  if(userExists){
    return <Redirect to='/categoriesscreen' />
  }

  var tabErrorsSignup = listErrorsSignup.map((error,i) => {
    return(<p>{error}</p>)
  })


    return (
      <ScrollView>
        <ImageBackground source={require('../assets/background-img-bokeh.jpg')} style={styles.container}>

        <Text style={{fontSize:25, fontWeight:'bold', marginBottom:20}}>Inscription</Text>

            <Text style={{fontSize:16, fontWeight:'bold', color:'#737373', marginTop:15, marginBottom:5}}>
              Nom d'utilisateur</Text>
            <View style={{flexDirection:'row', justifyContent:'flex-end', borderColor:'#979797', borderBottomWidth :1}}>
                <TextInput 
                    placeholder="nom d'utilisateur"
                    onChangeText={newUsername => setSignUpUsername(newUsername)}
                    defaultValue={signUpUsername}
                    style={styles.textInput}/>
            </View>

            <Text style={{fontSize:16, fontWeight:'bold', color:'#737373', marginTop:15, marginBottom:5}}>
              Email</Text>
            <View style={{flexDirection:'row', justifyContent:'flex-end', borderColor:'#979797', borderBottomWidth :1}}>
                <TextInput
                    placeholder='email'
                    onChangeText={newEmail => setSignUpEmail(newEmail)}
                    defaultValue={signUpEmail}
                    style={styles.textInput}/>
            </View>

            <Text style={{fontSize:16, fontWeight:'bold', color:'#737373', marginTop:15, marginBottom:5}}>
              Département</Text>
            <View style={{flexDirection:'row', justifyContent:'flex-end', borderColor:'#979797', borderBottomWidth :1}}>
                <TextInput 
                    placeholder='département'
                    onChangeText={newDepartement => setSignUpDepartement(newDepartement)}
                    defaultValue={signUpDepartement}
                    style={styles.textInput}/>
            </View>

            <Text style={{fontSize:16, fontWeight:'bold', color:'#737373', marginTop:15, marginBottom:5}}>
              Mot de passe</Text>
            <View style={{flexDirection:'row', justifyContent:'flex-end', borderColor:'#979797', borderBottomWidth :1}}>
                <TextInput 
                    placeholder='password'
                    onChangeText={newPassword => setSignUpPassword(newPassword)}
                    defaultValue={signUpPassword}
                    style={styles.textInputPassword}
                    type='password'/>
            <FontAwesome name="eye-slash" size={24} color="#979797" />

            </View>
            <View style={{alignItems:'flex-end',}}>
            <Text style={{justifyContent:'center',alignItems:'center',color:"#737373", marginTop:10}}>
              Mot de passe oublié</Text>
            </View>

            {/*  */}
            {tabErrorsSignup}

            <View>
            <Button 
                title="Je me connecte"
                buttonStyle={styles.button}
                // onPress={() => props.navigation.navigate('BottomNavigator', {screen: 'Categories'})}
                onPress={() => handleSubmitSignup()}></Button>
                
            </View>

            <View  style={{alignItems:'center', marginTop:10}}>
            <Text 
                onPress={() => props.navigation.navigate('SignIn', {screen: 'SignIn'})}>
                  Déja un compte
                  </Text>
            </View>

        </ImageBackground>
      </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      paddingHorizontal:30,
      paddingTop:50
    },
    textInput:{
    flex:1,
    
    paddingBottom:5,
    opacity:0.5
    },
    textInputPassword:{
      flex:1,
      //borderColor:'#737373',
      paddingBottom:5,
      opacity:0.5,
      },
      button:{
        height:45,
        //width:100,
        backgroundColor:'#53B175',
        borderRadius:10,
        marginTop:20
      },
  });      

export default SignUpScreen;
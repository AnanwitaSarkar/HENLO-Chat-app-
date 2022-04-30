import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Pressable } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import logo from "./image/chat-logo.jpg";
import { FontAwesome } from '@expo/vector-icons';
import FormButton from '../src/components/FormButton';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = () => {
    if (email !== '' && password !== '') {
     signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Login success'))
        .catch(err => console.log(`Login err: ${err}`));
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}/>
      <Text style={styles.title}>Welcome back!</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        textContentType='password'
        value={password}
        onChangeText={text => setPassword(text)}
      />
       <FontAwesome name="sign-in" size={45} color="#E69A8DFF"
        onPress={onHandleLogin} 
        style={styles.button}
      />
        <FormButton
          title='New user? Join here'
          style={{color:"#5F4B8BFF", fontWeight:"bold"}}
          modeValue='text'
          uppercase={false}
          //labelStyle={styles.buttonSign}
          onPress={() => navigation.navigate('Signup')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignContent: 'center',
    paddingHorizontal: 12
  },
  button:{
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#444',
    alignSelf: 'center',
    paddingBottom: 24
  },
  image:{
    //justifyContent: 'center',
    //alignContent: 'center',
    //alignItems:'center';
    width: 80, 
    height: 80, 
    margin: 15, 
    borderRadius: 50,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 12
  },
  buttonSign: {
    backgroundColor: '#E69A8DFF',
    marginTop: 8,
    height:50,
    width: 100,
    borderColor: 'black',
    borderRadius: 20,
    paddingTop: 5,
    alignSelf: 'center',
    paddingLeft: 30,
    fontSize: 16,
  }
});
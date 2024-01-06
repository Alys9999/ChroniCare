
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Button
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Login(): React.JSX.Element {


    return (
      <SafeAreaView style={{width: screenWidth, height: screenHeight}}>
        <View style={{height: screenHeight*0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/chroniLogo.png')} style={styles.ratioLogo}></Image>
        </View>
        <View>
            <TextInput placeholder='Enter Email'></TextInput>
            <TextInput placeholder='Enter Password'></TextInput>
        </View>
        <View style={{gap: 2, marginHorizontal:3}}>
          <Button onPress={()=>{}} title="Login"></Button>
          <Button onPress={()=>{}} title="Sign up"></Button>
        </View>
        
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    screenCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    ratioLogo: {
      width: screenWidth * 0.5, height: screenHeight * 0.3
    },
  });
  
  export default Login;
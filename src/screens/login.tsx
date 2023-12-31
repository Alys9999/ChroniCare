
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Login(): React.JSX.Element {


    return (
      <SafeAreaView style={{width: screenWidth, height: screenHeight}}>
        <View>
        <Image source={require('../assets/chroniLogo.png')} style={styles.ratioLogo}></Image>
        </View>
        <View>
            <TextInput></TextInput>
            <TextInput></TextInput>
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
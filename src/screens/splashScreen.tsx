
import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


function SplashScreen(): React.JSX.Element {
    const [isLoading, setIsLoading] = useState(true);


       return (
            <SafeAreaView style={styles.screenCenter}>
              <Image source={require('../assets/chroniLogo.png')} style={styles.ratioLogo}></Image>
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
  
  export default SplashScreen;
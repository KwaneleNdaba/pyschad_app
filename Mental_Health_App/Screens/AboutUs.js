import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function AboutUsScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>About Us Screen</Text>
      </View>
    );
  }

export default AboutUsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
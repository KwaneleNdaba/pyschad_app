import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function BookingScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Booking Screen</Text>
      </View>
    );
  }

export default BookingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
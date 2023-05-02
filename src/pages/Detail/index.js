import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'BMW-118i-M-Sport'
  });

return (
  <ScrollView style={styles.container}>
        <Image
        source={require('../../assets/BMW-118i-M-Sport_1.jpg')}
        style={styles.image}
        resizeMode='cover'
        />
        <View>
          <View>
            <Text style={[styles.title, {fontSize: 24} ]}>R$ 220.900,00</Text>
          </View>
          <View opacity={0.4}>
            <Text style={[styles.title, {fontSize: 30} ]}>BMW-118i-M-Sport</Text>
          </View>
        </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: 375,
    height: 175
  },
  title: {
    alignContent: 'center',
    fontFamily: 'Roboto',
    paddingHorizontal: '2%'
  }
});
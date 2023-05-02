import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Cars from '../../component/Cars';

export default function Home() {
  const navigation = useNavigation();

return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image
      source={require('../../assets/logo2.png')}
      style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.Text}>Veículos</Text>
        <Text style={[styles.Text, { color: '#0a1a44'}]}>-</Text>
        <Text style={[styles.Text, { color: '#0a1a44'}]}>Importados</Text>
        <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
          <MaterialIcons
          name="filter-list"
          size={24}
          color="#000"
          />
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.line}/>

    <ScrollView>
      <Text style={[styles.Text, {fontSize: 14}]}>mais buscados</Text>
      <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
        <Cars img={require('../../assets/BMW-118i-M-Sport_1.jpg')} cost="R$ 220.900,00" onClick={()=> navigation.navigate('Detail') }> 
        BMW-118i-M-Sport
        </Cars>
        <Cars img={require('../../assets/volvoxc60.jpg')} cost="R$ 35.500,00" onClick={()=> navigation.navigate('Detail') }> 
        Volvo xc60
        </Cars>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
        <Cars img={require('../../assets/Mercedesc180.jpg')} cost="R$ 320.500,00" onClick={()=> alert('CLICOU')}> 
        Mercedes-benz c180
        </Cars>
        <Cars img={require('../../assets/bmw.jpeg')} cost="R$ 250.980,00" onClick={()=> alert('CLICOU')}> 
        BMW azul m 135i
        </Cars>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
        <Cars img={require('../../assets/Creta.jpg')} cost="R$ 180.900,00" onClick={()=> alert('CLICOU')}> 
        Hyundai Creta 2022
        </Cars>
        <Cars img={require('../../assets/MASERATIFISSORE1964.jpg')} cost="R$402.980,00" onClick={()=> alert('CLICOU')}> 
        OSCA 1600 GT2 MASERATI FISSORE 1964 002
        </Cars>
      </View>
    </ScrollView>

  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8,
  },
  image:{
    width: '100%',
    marginTop: 16,
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  Text:{
    fontFamily: 'Roboto',
    fontSize: 20,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#d8e6ed',
    borderBottomWidth: 2
  }
});
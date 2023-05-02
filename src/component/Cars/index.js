import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";

export default function Cars(props) {
  function filterDesc(desc) {
    if (desc.length < 27) {
      return desc;
    }
    return `${desc.substring(0, 22)}...`;
  }

  return (
    <TouchableOpacity style={styles.contanier} onPress={props.onClick}>
      <Image source={props.img} style={styles.carsImg} />
      <Text style={styles.carsText}>{filterDesc(props.children)}</Text>
      <View opacity={0.4}>
        <Text style={styles.carsText}> {props.cost} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contanier: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  carsImg: {
    width: 375,
    height: 175
  },
  carsText: {
    fontSize: 16,
  },
});

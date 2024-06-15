import React from 'react';
import { View, Text, Image , TextInput, TouchableOpacity} from 'react-native';
import Styles from "../assets/Styles";

export default function Add() {
  return (
    <View>
      <View style={Styles.logoContainer}>
        <Image style={Styles.logo} source={require('../assets/logo_fruit.png')} />
      </View>
      <View style={Styles.formContainer}>
        <Text style={Styles.title}>Agregar producto</Text>
        <TextInput style={Styles.input} placeholder="Nombre producto" />
        <TextInput style={Styles.input} placeholder="Código Producto" />
        <TextInput style={Styles.input} placeholder="Cantidad" />
        <TextInput style={Styles.input} placeholder="Fecha caducidad" />
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


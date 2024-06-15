import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from "../assets/Styles";

export default function Login({navigation}) {
  return (
    <View>
      <View style={Styles.logoContainer}>
        <Image style={Styles.logo} source={require('../assets/logo_fruit.png')} />
      </View>
      <TextInput style={Styles.input} placeholder="correo electronico" />
      <TextInput style={Styles.input} placeholder="contraseña" secureTextEntry={true} />

      <TouchableOpacity style={Styles.button} onPress={() => {navigation.navigate("add")}}>
        <Text style={Styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <View style={Styles.signupTextCont}>
        <Text style={Styles.signupText}>Crear una cuenta nueva</Text>
        <TouchableOpacity onPress={() => {navigation.navigate("register")}}>
          <Text style={Styles.signupButton}>Regístrate</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.signupButton}>Olvidó contraseña?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import Styles from "../assets/Styles";

export default function Register({navigation}) {
  return (
    <View>
      <View style={Styles.logoContainer}>
        <Image style={Styles.logo} source={require('../assets/logo_fruit.png')} />
      </View>
      <View style={Styles.formContainer}>
        <Text style={Styles.title}>Crear cuenta nueva</Text>
        <TextInput style={Styles.input} placeholder="Nombre Completo" />
        <TextInput style={Styles.input} placeholder="Correo electronico" />
        <TextInput style={Styles.input} placeholder="Contraseña" secureTextEntry={true} />
        <TextInput style={Styles.input} placeholder="Comprobar contraseña" secureTextEntry={true} />
        <TouchableOpacity style={Styles.button} onPress={() => {navigation.navigate("login")}}>
          <Text style={Styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

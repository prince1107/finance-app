import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {App} from "..//firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        <View>
            <Text>Hello.</Text>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
})

import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {App} from "..//firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../navigation/tabs';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <Tabs />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'end',
   },
})

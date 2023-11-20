import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { db } from "../firebase";
import { collection, addDoc, doc, updateDoc, getDocs, deleteDoc, setDoc } from "firebase/firestore";
import axios from 'axios';

const AddStockScreen = () => {
  const [tickerSym, setTickerSym] = useState("")
  const [price, setPrice] = useState("")
  const [shares, setShares] = useState("")

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user.uid)
      }
    })
  }, [])

  const handleButtonClick = async(event) => {
    console.log(tickerSym)
    console.log(price)
    console.log(shares)
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        function: 'TIME_SERIES_DAILY_ADJUSTED',
        symbol: tickerSym,
        datatype: 'json',
        output_size: 'compact'
      },
      headers: {
        'X-RapidAPI-Key': '22759959d0msh6518744796a1e45p181763jsn6852499fe9ca',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setTickerSym("")
    setPrice("")
    setShares("")
  }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        <Text style={styles.header}>Add New Investment</Text>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Ticker Symbol of Stock"
                value={tickerSym}
                onChangeText={text => setTickerSym(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Price Bought At"
                value={price}
                onChangeText={text => setPrice(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Amount of Shares Bought"
                value={shares}
                onChangeText={text => setShares(text)}
                style={styles.input}
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleButtonClick}
            >
                <Text style={styles.buttonText}>Add Investment</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default AddStockScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   inputContainer: {
    width: '60%',
   },
   input: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 5,
   },
   buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
   },
   button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
   },
   buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
   },
   buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
   },
   buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
   },
   header: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 30,
    padding: 30,
   }
})
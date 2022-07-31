//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,TextInput, Text, View, Alert } from 'react-native';
import Card from '../components/card';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Colours from '../constants/colours';
import InstructionTitle from '../components/InstructionTitle';

function FirstGameScreen( {onPickNumber} ) {

    const [enteredNumber, setEnteredNumber] = useState('')

    function inputNumberHandler(EnteredText){
      setEnteredNumber(EnteredText)
    }

    function resetNumber(){
      setEnteredNumber('')
    }

    

    function confirmNumberHandler(){
      const IntNumber = parseInt(enteredNumber)

      if(isNaN(IntNumber) || IntNumber<=0 || IntNumber>99 ){
        Alert.alert(
          'Invalid Number', 
          'The Number must be between 0 and 99', 
          [{text: 'Okay', style:'destructive', onPress: resetNumber}]
        )
        return 
      }
      onPickNumber(enteredNumber)
    }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess The Number</Title>
      <Card>
        <InstructionTitle>Enter your number</InstructionTitle>
          <TextInput 
              style={styles.numberInput} 
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize='none'
              autoComplete='off'
              onChangeText={inputNumberHandler}
              value={enteredNumber}
          />
          
          <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton Pressed={resetNumber}>Reset</PrimaryButton> 
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton Pressed={confirmNumberHandler}>Confirm</PrimaryButton>
              </View>
          </View>
        </Card>
    </View>
  );
}

export default FirstGameScreen

const styles = StyleSheet.create({
  
  rootContainer: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
  },
  
  numberInput: {
    marginVertical: 8,
    height: 50,
    width: 50,
    textAlign: 'center',
    borderBottomColor: Colours.secondary500,
    borderBottomWidth: 2,
    color: Colours.secondary500,
    fontSize: 32,
    fontWeight: 'bold',

  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
});

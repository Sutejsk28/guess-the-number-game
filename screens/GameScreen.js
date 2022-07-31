//import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View,Text, Alert } from 'react-native';
import Card from '../components/card';
import NumberContainer from '../components/game/NumberContainer';
import InstructionTitle from '../components/InstructionTitle';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import {Ionicons} from '@expo/vector-icons'
import { FlatList } from 'react-native';
import GuessLogItem from '../components/game/GuessLogItem';

function GenerateRandomNumber(max,min,exclude){
  const randNum = Math.floor(Math.random()*(max-min)) + min

  if(randNum === exclude){
    return GenerateRandomNumber(max,min,exclude)
  }else{
    return randNum
  }

}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({UserInput, GameOver}) {

  const initialGuess = GenerateRandomNumber(1,100,UserInput)
  const [currentNumber, setCurrentNumber] = useState(initialGuess)
  const [guessList, setGuessList] = useState([initialGuess])

  useEffect( () => {
    if(currentNumber == UserInput){
      console.log('inside if')
      GameOver();
    }
  }, [currentNumber, UserInput, GameOver])

  useEffect( ()=>{
    minBoundary=1
    maxBoundary=100
  }, [] )

  function NextGuessHandler(direction){
    if( (direction==='lower' && currentNumber<UserInput) ||
        (direction==='greater' && currentNumber>UserInput) ){
          Alert.alert('You are lying', 'you know that this is wrong', [{text: 'sorry!', style: 'cancel'}])
          return
    }

    if(direction === 'lower'){
      maxBoundary=currentNumber
    }else if(direction === 'greater'){
      minBoundary = currentNumber+1
    }

    const newRandNum = GenerateRandomNumber(minBoundary,maxBoundary,currentNumber) 
    setCurrentNumber(newRandNum)
    setGuessList( (prevGuessList)=>{ [newRandNum,...prevGuessList] } )
  }

  // const guessListLength = guessList.length

  return (
    <View style={styles.screen}>
      <View>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentNumber}</NumberContainer>
      </View>
      <Card>
        <InstructionTitle style={styles.instructionTitle}>Higher or Lower?</InstructionTitle>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton Pressed={NextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton Pressed={NextGuessHandler.bind(this, 'greater')}>
            <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>
          
        </View>
      </Card>
      <View>
        <FlatList 
          data={guessList}
          renderItem={ (itemData)=> <GuessLogItem round={itemData.index} guess={itemData.item}  /> }
          keyExtractor={(item)=>item}
        />
      </View>
    </View>
  );
}

export default  GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 48,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  instructionTitle: {
    marginBottom: 16,
  }
});

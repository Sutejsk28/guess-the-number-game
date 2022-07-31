//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ImageBackground } from 'react-native';
import Colours from './constants/colours';
import FirstGameScreen from './screens/FirstGameScreen';
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'


export default function App() {

  const [enteredNumber, setEnteredNumber] = useState()
  const [gameOver, setGameOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  function pickedNumberHandler(pickedNumber){
    setEnteredNumber(pickedNumber)
    setGameOver(false)
  }

  function GameOverHandler(){
    setGameOver(true)
  }

  function RestartGameHandler(){
    setEnteredNumber(null)
    setGuessRounds(0)
  }

  let screen=<FirstGameScreen onPickNumber={pickedNumberHandler} />

  if(enteredNumber){
    screen=<GameScreen UserInput={enteredNumber} GameOver={GameOverHandler}/>
  }

  if(gameOver && enteredNumber){
    screen = <GameOverScreen RoundsNumber={guessRounds} UserNumber={enteredNumber} RestartGameHandler={RestartGameHandler}  />
  }

  return (
    <View style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/dice-image.jpg')} 
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.ImageBackground}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: Colours.secondary500,
    flex: 1,
  },
  ImageBackground: {
    opacity: 0.70,
  }
});

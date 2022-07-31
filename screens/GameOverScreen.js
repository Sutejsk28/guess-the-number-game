//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Colours from '../constants/colours';

function GameOverScreen({RoundsNumber, UserNumber, RestartGameHandler}) {
  return (
    <View style={styles.rootContainer} >
      <Title>Game Over!</Title>
      <Text style={styles.summaryText}>
        Your Phone took 
        <Text style={styles.highlight}> {RoundsNumber} </Text>
        times to guess
        <Text style={styles.highlight}> {UserNumber} </Text>
      </Text>
      <PrimaryButton Pressed={RestartGameHandler}>Start New Game</PrimaryButton>
    </View>
  );
}

export default  GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  summaryText: {
    
    fontSize: 24,
    textAlign: 'center',
    marginBottom: '36'
  },
  highlight: {
    fontWeight: 'bold',
    color: Colours.primary700,
  }
});

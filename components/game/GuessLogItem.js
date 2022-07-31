import { View,Text,StyleSheet } from "react-native"
import Colours from "../../constants/colours"

function GuessLogItem({rounds, guess}){
    return (
        <View style={styles.container}>
            <Text>#{rounds}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    container: {
        borderColor: Colours.primary700,
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: Colours.secondary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        marginVertical: 8,
        width: "100%",
        elevation: 6,
        shadowColor: 'black',
        shadowOffset: {width: 0,height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    
    }
})
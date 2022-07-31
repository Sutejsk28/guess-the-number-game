import {Text, StyleSheet} from 'react-native'
import Colours from '../constants/colours';

function InstructionTitle({children, style}){
    return(
        <Text style={[styles.instructionTitle, style]}>{children}</Text>
    )
}

export default InstructionTitle

const styles = StyleSheet.create({
    instructionTitle: {
        color: Colours.secondary500,
        fontSize: 24,
      },
})
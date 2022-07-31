import {StyleSheet, Text} from 'react-native'
import  Colours  from '../constants/colours'

function Title({children}){
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        borderWidth: 2,
        borderColor: Colours.primary700,
        color: Colours.primary700,
        textAlign: 'center',
      }
})
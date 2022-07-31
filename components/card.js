import {View, StyleSheet} from 'react-native'
import Colours from '../constants/colours'

function Card({children}){
    return(
        <View style={styles.card}>{children}</View>
    )
}

export default Card

const styles= StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colours.primary700,
        borderRadius: 8,
        elevation: 8,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 6,
    
      },
})


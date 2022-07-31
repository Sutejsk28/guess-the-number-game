import { Text, View, StyleSheet } from "react-native";
import Colours from "../../constants/colours";

function NumberContainer({children}){

    return(
        <View style={styles.container}>
            <Text style={styles.NumberText}>{children}</Text>
        </View>
    )

}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colours.primary700,
        borderRadius: 8,
        padding: 24,
        margin: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    NumberText: {
        color: Colours.primary700,
        fontSize: 36
    },
})
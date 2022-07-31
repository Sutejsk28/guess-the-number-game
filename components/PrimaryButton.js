import { Pressable,StyleSheet, Text , View} from "react-native"

function PrimaryButton({children, Pressed}) {
    return (
        <View style={styles.ButtonOuterContainer}>
            <Pressable 
                android_ripple={{color: "#640233"}} 
                style={({pressed}) => 
                    pressed?[styles.ButtonInnerContainer, styles.pressed]
                    :styles.ButtonInnerContainer
                }
                onPress={Pressed}
            >
                <Text style={styles.ButtonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    ButtonOuterContainer: {
        overflow: 'hidden',
        margin: 8,
        borderRadius: 24,
    },
    ButtonInnerContainer: {
        elevation: 2,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#72063c"
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
});
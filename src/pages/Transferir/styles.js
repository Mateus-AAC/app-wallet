import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b050eb'
    },
    containerForm: {
        backgroundColor: '#e9e7e1',
        flex: 1,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    button: {
        backgroundColor: '#b050eb',
        width: '100%',
        borderRadius: 15,
        paddingVertical: 8,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSizer: 16
    },
    buttonText: {
        color: '#e9e7e1',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
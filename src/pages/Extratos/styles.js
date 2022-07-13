import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b050eb'
    },
    button: {
        backgroundColor: '#b050eb',
        width: '100%',
        borderRadius: 15,
        paddingVertical: 8,
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#e9e7e1',
        fontSize: 18,
        fontWeight: 'bold'
    },
    TextTitulo: {
        fontSize: '20px',
        alignItems: 'center',
        color: '#a1a1a1',
        margin: '20px'
    },
    Text: {
        fontSize: '15px',
        alignItems: 'center',
        color: 'black',
        marginLeft: '20px'
    },
    containerForm: {
        backgroundColor: '#e9e7e1',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    saldo: {
        backgroundColor: '#e9e7e1',
        width: '300px',
        height: '150px',
        borderRadius: 20,
        marginTop: '10px',
        marginBottom: '2px'
    },
    containerLogo: {
        flex: 3,
        backgroundColor: '#b050eb',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
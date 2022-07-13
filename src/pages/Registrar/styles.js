import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b050eb'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#b050eb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextTitulo: {
        fontSize: '40px',
        alignItems: 'center',
        color: '#e9e7e1'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#e9e7e1'
    },
    containerForm: {
        backgroundColor: '#e9e7e1',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSizer: 16
    },
    button: {
        backgroundColor: '#b050eb',
        width: '100%',
        borderRadius: 15,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#e9e7e1',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
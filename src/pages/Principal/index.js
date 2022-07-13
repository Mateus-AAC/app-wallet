import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { api } from "../../services/api";

import { useNavigation } from "@react-navigation/native";

import { styles } from '../Principal/styles';

export default function Register() {
    async function handlebars() {
        await api.get('/search?id=712828104040513607', {

        }).then((response) => {
            console.log(response);
        })
    }
    //await api.post('/path-depos-de-bank', {
    //    type: feedbackType,
    //    comment,
    //    screenshot
    //  }).then((response) => {
    //    console.log(response);
    // })

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInDown' style={styles.containerLogo}>
                <View style={styles.saldocartao}>
                    <Text style={styles.cartao}>𝐻𝒶𝓅𝓅𝓎 𝓈𝓊𝑔𝒶𝓇 𝒸𝒶𝓇𝒹</Text>
                    <Text style={styles.Textcartao}>9999 9999 9999 9999</Text>
                    <Text style={styles.nome}>UNDEFINED<Text style={styles.cvv}>CVV:<Text style={styles.cvv}>999</Text><Text style={styles.simbolo}> 🍬</Text></Text></Text>
                </View>

                <View style={styles.saldo}>
                    <Text style={styles.TextTitulo}>Saldo Disponivel</Text>
                    <Text style={styles.Text}>R$< Text style={styles.Text}>999,99</Text></Text>
                </View>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Transferir')}
                >
                    <Text style={styles.buttonText} onPress={() => handlebars()}>Transferir</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Extrato')}
                >
                    <Text style={styles.buttonText}>Extrato</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View >
    );
}

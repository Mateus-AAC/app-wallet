import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { styles } from '../Principal/styles';

import { useNavigation } from "@react-navigation/native";

import { dadosRefinados, gerenciar } from "../../controller/happycontroller";

export default function Principal() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInDown' style={styles.containerLogo}>
                <View style={styles.saldocartao}>
                    <Text style={styles.cartao}>𝐻𝒶𝓅𝓅𝓎 𝓈𝓊𝑔𝒶𝓇 𝒸𝒶𝓇𝒹</Text>
                    <Text style={styles.Textcartao}>{dadosRefinados[1]}</Text>
                    <Text style={styles.cvv}>CVV:<Text style={styles.cvv}>{dadosRefinados[2]}</Text><Text style={styles.simbolo}> 🍬</Text></Text>
                </View>

                <View style={styles.saldo}>
                    <Text style={styles.TextTitulo}>Saldo Disponivel</Text>
                    <Text style={styles.Text}>R$< Text style={styles.Text}>{dadosRefinados[3]}</Text></Text>
                </View>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Transferir')}
                >
                    <Text style={styles.buttonText}>Transferir</Text>
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

gerenciar.pegarDados();
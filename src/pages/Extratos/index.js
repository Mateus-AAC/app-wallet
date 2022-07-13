import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

import { styles } from '../Extratos/styles';

export default function Register() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInDown' style={styles.containerLogo}>
                <View style={styles.saldo}>
                    <Text style={styles.TextTitulo}>UNDEFINED</Text>
                    <Text style={styles.Text}>Data:<Text style={styles.Text}>31/12/1962</Text></Text>
                    <Text style={styles.Text}>R$<Text style={styles.Text}>999,99</Text></Text>
                </View>
                <View style={styles.saldo}>
                    <Text style={styles.TextTitulo}>UNDEFINED</Text>
                    <Text style={styles.Text}>Data:<Text style={styles.Text}>31/12/1962</Text></Text>
                    <Text style={styles.Text}>R$<Text style={styles.Text}>999,99</Text></Text>
                </View>
                <View style={styles.saldo}>
                    <Text style={styles.TextTitulo}>UNDEFINED</Text>
                    <Text style={styles.Text}>Data:<Text style={styles.Text}>31/12/1962</Text></Text>
                    <Text style={styles.Text}>R$<Text style={styles.Text}>999,99</Text></Text>
                </View>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

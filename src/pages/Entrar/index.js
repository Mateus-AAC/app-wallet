import React from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

import { styles } from '../Registrar/styles';

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Text animation="fadeInDown" delay={600} iterationCount={1} direction="alternate" style={styles.TextTitulo}>𝐵𝑒𝓂 - 𝒱𝒾𝓃𝒹𝑜 (𝒶)</Animatable.Text>
            </View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Codigo</Text>
                <TextInput
                    placeholder="Digite aqui"
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Registrar')}
                >
                    <Text style={styles.RegisterText}>Não possui uma conta? Cadastra-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
import React, { useState } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

import { styles } from '../Entrar/styles';

export const loginIDS = [];

export default function Entrar() {
    const [text, setText] = useState('');

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
                    nativeID='idvalor'
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Principal')}>Acessar</Text>
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
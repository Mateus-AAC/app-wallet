import React, { useState } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

import { styles } from '../Registrar/styles';

export default function Register() {
    const [text, setText] = useState('');

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Text animation="fadeInDown" delay={600} iterationCount={1} direction="alternate" style={styles.TextTitulo}>𝑅𝑒𝑔𝒾𝓈𝓉𝓇𝒶𝓇</Animatable.Text>
            </View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Codigo para ser register</Text>
                <TextInput
                    placeholder="Digite aqui"
                    style={styles.input}
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

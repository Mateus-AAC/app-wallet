import React from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

import { styles } from '../Transferir/styles';

export default function Register() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Nome Da Pessoa</Text>
                <TextInput
                    placeholder="Digite aqui"
                    style={styles.input}
                />
                <Text style={styles.title}>Valor Desejado</Text>
                <TextInput
                    placeholder="Digite aqui"
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={styles.buttonText}>Transferir</Text>
                </TouchableOpacity>
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

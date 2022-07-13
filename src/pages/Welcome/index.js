import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

import { styles } from '../Welcome/styles';

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Text animation="fadeInDown" delay={600} iterationCount={1} direction="alternate" style={{
                    fontSize: '50px',
                    marginRight: '90px',
                    color: '#e9e7e1'
                }}>𝒽𝒶𝓅𝓅𝓎 </Animatable.Text>
                <Animatable.Text animation="fadeInDown" delay={600} iterationCount={1} direction="alternate" style={{
                    fontSize: '50px',
                    textAlign: 'center',
                    color: '#e9e7e1'
                }}>𝓈𝓊𝑔𝒶𝓇 </Animatable.Text>
                <Animatable.Text animation="fadeInDown" delay={600} iterationCount={1} direction="alternate" style={{
                    fontSize: '50px',
                    marginLeft: '90px',
                    color: '#e9e7e1'
                }}>𝓁𝒾𝒻𝑒</Animatable.Text>
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Monitore, transfira seus sugares de qualquer lugar!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Entrar')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
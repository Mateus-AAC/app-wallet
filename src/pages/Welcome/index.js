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
                }}>π½πΆπππ </Animatable.Text>
                <Animatable.Text animation="fadeInDown" delay={600} iterationCount={1} direction="alternate" style={{
                    fontSize: '50px',
                    textAlign: 'center',
                    color: '#e9e7e1'
                }}>ππππΆπ </Animatable.Text>
                <Animatable.Text animation="fadeInDown" delay={600} iterationCount={1} direction="alternate" style={{
                    fontSize: '50px',
                    marginLeft: '90px',
                    color: '#e9e7e1'
                }}>ππΎπ»π</Animatable.Text>
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Monitore, transfira seus sugares de qualquer lugar!</Text>
                <Text style={styles.text}>FaΓ§a o login para comeΓ§ar</Text>

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
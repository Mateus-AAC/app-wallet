import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';

import Entrar from '../pages/Entrar';

import Registrar from '../pages/Registrar';

import Principal from '../pages/Principal';

import Transferir from '../pages/Transferir';

import Extrato from '../pages/Extratos';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Entrar"
                component={Entrar}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Registrar"
                component={Registrar}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Extrato"
                component={Extrato}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Transferir"
                component={Transferir}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}
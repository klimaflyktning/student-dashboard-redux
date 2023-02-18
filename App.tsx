import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import DistributionGraph from './screens/DistributionGraph';
import EditDetail from './screens/EditDetail';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: 'Home' }}
                    />
                    <Stack.Screen
                        name="DistributionGraph"
                        component={DistributionGraph}
                        options={{ title: 'Distribution graph' }}
                    />
                    <Stack.Screen
                        name="EditDetail"
                        component={EditDetail}
                        options={{ title: 'Edit Detail' }}
                    />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    );
}

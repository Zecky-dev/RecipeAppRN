import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './pages/Categories/Categories';
import Meals from './pages/Meals/Meals';
import MealDetail from './pages/Meals/MealDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} />
                <Stack.Screen name="Meals" component={Meals}/>
                <Stack.Screen name="MealDetail" component={MealDetail} options={{title:'Details'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

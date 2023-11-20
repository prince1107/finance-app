import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AddStockScreen from '../screens/AddStockScreen';
import NewsScreen from '../screens/NewsScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import SettingScreen from '../screens/SettingScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            // tabBarOptions={{
            //     showLabel: false,
            // }}
            screenOptions={{
                tabBarStyle: { 
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,  
                    ...styles.shadow
                },
            }}
        >
            <Tab.Screen options={{ headerShown: false}} name="Log In" component={LoginScreen} />
            <Tab.Screen options={{ headerShown: false}} name="AddStock" component={AddStockScreen} />
            <Tab.Screen options={{ headerShown: false}} name="News" component={NewsScreen} />
            <Tab.Screen options={{ headerShown: false}} name="Portfolio" component={PortfolioScreen} />
            <Tab.Screen options={{ headerShown: false}} name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    }
})

export default Tabs;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AddStockScreen from '../screens/AddStockScreen';
import NewsScreen from '../screens/NewsScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="AddStock" component={AddStockScreen} />
            <Tab.Screen name="News" component={NewsScreen} />
            <Tab.Screen name="Portfolio" component={PortfolioScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    );
}

export default Tabs;
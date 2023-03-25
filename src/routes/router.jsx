// imports
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'

// pages
import HomePage from '../pages/HomePage'
import CategoryPage from '../pages/CategoryPage'
import CartPage from '../pages/CartPage'
import AccountPage from '../pages/AccountPage'

// imports of store
import { useSelector } from 'react-redux'


// tab
const Tab = createBottomTabNavigator()

// router view
const RouterView = () => {
    const counter_state = useSelector((state) => state.counter.value)
    return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='HomePage' component={HomePage} options={{ title: "Shop uz", tabBarIcon: (tabBarInfo) => <Icon name='home' size={20} color={tabBarInfo.focused ? '#207dff' : 'rgba(0, 0 , 0, 0.8)'} />, tabBarLabelStyle: { fontSize: 13 }, tabBarLabel: "Bosh sahifa" }} />
                    <Tab.Screen name='CategoryPage' component={CategoryPage} options={{ title: "Ro'yxat", tabBarIcon: (tabBarInfo) => <Icon name='list' size={20} color={tabBarInfo.focused ? '#207dff' : 'rgba(0, 0 , 0, 0.8)'} />, tabBarLabelStyle: { fontSize: 13 } }} />
                    <Tab.Screen name='CartPage' component={CartPage} options={{ title: "Savatcha", tabBarIcon: (tabBarInfo) => <Icon name='shopping-cart' size={20} color={tabBarInfo.focused ? '#207dff' : 'rgba(0, 0 , 0, 0.8)'} />, tabBarLabelStyle: { fontSize: 13 }, tabBarBadge: JSON.stringify(counter_state) }} />
                    <Tab.Screen name='AccountPage' component={AccountPage} options={{ title: "Profil", tabBarIcon: (tabBarInfo) => <Icon name='user' size={20} color={tabBarInfo.focused ? '#207dff' : 'rgba(0, 0 , 0, 0.8)'} />, tabBarLabelStyle: { fontSize: 13 } }} />
                </Tab.Navigator>
            </NavigationContainer>
    )
}

export default RouterView
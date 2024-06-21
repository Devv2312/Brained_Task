import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from './assets/Components/Sign-Up';
import Login from './assets/Components/Login';
import HomeScreen from './assets/Components/HomeScreen';
import { Provider } from 'react-redux';
import store from './Redux/Store';

export default function App() {

  const stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
          <stack.Screen name="SignUp" component={SignUp} />
          <stack.Screen name="Login" component={Login} />
          <stack.Screen name="Home" component={HomeScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>

    // <View style={styles.container}>
    /* < SignUp/>
     <Login/>  */
    /* <HomeScreen />
  <StatusBar style="auto" />
 </View>  */
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

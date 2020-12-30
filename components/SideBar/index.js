import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { AppRegistry, Button } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import 'firebase/auth';

// componentes
import { UserProvider } from './components/Users/userContext';
import useUser from './components/Users/useUser';
import MyTabs from './components/MenuBar/TabBar';
import UnderConstruction from "./components/UnderConstruction";
import CreateEvent from './components/Event/EventCrud/CreateEvent';
import EventCard from './components/Event/EventCard';
import EventDetail from './components/Event/EventDetail/EventDetail';
import EditEvent from './components/Event/EventCrud/EditEvent';
import DeleteEditEvent from './components/Event/EventCrud/DeleteEditEvent';
import HeaderTab from './components/Header/HeaderTab';
import Home from './components/Home';
import Calendario from './components/Calendario';
// import UserList from "./components/Users/UsersList";
import Login from './components/Users/Login';
import ChatCard from './components/Chat/ChatCard';
import ChatDetail from './components/Chat/ChatDetail';
import UsersList from './components/Chat/UsersList';
import InterestLinks from './components/LinkInteres/InterestLinks';
import createLinks from './components/LinkInteres/CrudLink';
import AgregarTarea from './components/Calendario/AgregarTarea';
import FechaSeleccionada from './components/Calendario/FechaSeleccionada';
import UserPromote from './components/AdminPanel/UserPromote';

import AdminPanel from './components/AdminPanel/AdminPanel';

// import SideBar from './components/SideBar/index';
import DrawerNavigator from './components/SideBar/index';

import { createDrawerNavigator } from '@react-navigation/drawer';

// import Icon from 'react-native-vector-icons'


// const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => {
  <HomeStack.Navigator
    initialRouteName="Tab"
    screenOptions={{
      cardStyle: { backgroundColor: '#fff' },
    }}>
    // name="Home" component={Home}
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    // name="Calendario" component={Calendario}
    <HomeStack.Screen
      name="Calendar"
      component={Calendario}
      options={{ headerShown: false }}
    />
    // name="Eventos" component={EventCard}
    <HomeStack.Screen
      name="Event"
      component={EventCard}
      options={{ headerShown: false }}
    />
    // name="Congresos" component={UnderConstruction}
    <HomeStack.Screen
      name="Congresos"
      component={UnderConstruction}
      options={{ headerShown: false }}
    />
    // name="Links de interes" component={InterestLinks}
    <HomeStack.Screen
      name="Links de interes"
      component={InterestLinks}
      options={{ headerShown: false }}
    />
    // name="Perfil" component={UnderConstruction}
    <HomeStack.Screen
      name="Perfil"
      component={UnderConstruction}
      options={{ headerShown: false }}
    />
    // name="AdminPanel" component={AdminPanel}
    <HomeStack.Screen
      name="Admin Panel"
      component={AdminPanel}
      options={{ headerShown: false }}
    />
    // name="Chat" component={ChatCard}
    <HomeStack.Screen
      name="Chat"
      component={ChatCard}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Tab"
      component={MyTabs}
      options={{ headerShown: false }}
    />

  </HomeStack.Navigator>;
};

var firebaseConfig = {
  apiKey: 'AIzaSyBRutCUmn2wHrUAMzbM-5ESVsGxO2UEwQE',
  authDomain: 'visitar-test.firebaseapp.com',
  projectId: 'visitar-test',
  storageBucket: 'visitar-test.appspot.com',
  messagingSenderId: '960314269839',
  appId: '1:960314269839:web:c9130a27fd6f5848ac50fa',
  measurementId: 'G-8Y4DCJFJ5Z',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Initialize Apollo Client
const client = new ApolloClient({
  //web
  uri: 'https://visitar-ar.herokuapp.com/graphql',
  //uri: "http://192.168.1.26:3002/graphql", //Leandro
  cache: new InMemoryCache(),
});

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function App() {
  const { user, setUser } = useUser();
  useEffect(() => {
    const unsuscribe = firebase
      .auth()
      .onAuthStateChanged((user) => setUser(user));
    return () => unsuscribe();
  }, [setUser]);
  /* console.log(user); */
  return (
    <View
      style={{
        height: '100%',
        marginTop: StatusBar.currentHeight,
        width: '100%',
        display: 'flex',
      }}>
      <ApolloProvider client={client}>
        <NavigationContainer theme={MyTheme}>
          <Button
            color="#7C88D5"
            onPress={() => firebase.auth().signOut()}
            title="Cerrar sesión"
          />
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Calendario" component={Calendario} />
            <Drawer.Screen name="Eventos" component={EventCard} />
            <Drawer.Screen name="Congresos" component={UnderConstruction} />
            <Drawer.Screen name="Links de interes" component={InterestLinks} />
            <Drawer.Screen name="Perfil" component={UnderConstruction} />
            <Drawer.Screen name="Admin Panel" component={AdminPanel} />
            <Drawer.Screen name="Chat" component={ChatCard} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </View>
  );
}

export default function () {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98e6fa',
    marginTop: 300,
    marginBottom: 100,
    marginLeft: 10,
    marginRight: 10,
    height: 10,
    /*width: 400,*/
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 30,
  },
});

AppRegistry.registerComponent('MyApplication', () => App);

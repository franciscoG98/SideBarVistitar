import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import BurgerMenu from "../images/BurgerMenuIcon";

import Home from "../Home";
import Cal from "../Calendario";
import Congresos from "../Event/EventCard";
// import CongresosDetail from "../Event/EventDetail/EventDetail";
import UnderConstruction from "../UnderConstruction";
import Links from "../LinkInteres/InterestLinks";
// import MenuBar from "../MenuBar/MenuBar";
import AdminPanel from "../AdminPanel/AdminPanel";
import Chat from "../Chat/ChatCard";

function Menu({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#7C88D5',
        position: 'absolute'
      }}
    >
      <Button
        // marginTop="10px"
        color="#7C88D5"
        title="side"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text>Home?</Text> */}
      {Menu({ navigation })}
      <Home />
      {/* <MenuBar /> */}
    </View>
  );
}

function CalendarioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {Menu({ navigation })}
      <Text>Calendario</Text>
      <Cal />
      {/* <MenuBar /> */}
    </View>
  );
}

function CongresosScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Congresos</Text>
      {Menu({ navigation })}
      <Congresos />
      {/* <MenuBar /> */}
    </View>
  );
}

function LinksScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {Menu({ navigation })}
      <Text>Links de inteŕes</Text>
      <Links />
      {/* <MenuBar /> */}
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {Menu({ navigation })}
      <Text>Mi perfil</Text>
      <UnderConstruction />
      {/* <MenuBar /> */}
    </View>
  );
}

function AdminPanelScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {Menu({ navigation })}
      <Text>Panel de Administrador</Text>
      <AdminPanel />
    </View>
  );
}

function ChatScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {Menu({ navigation })}
      <Text>Chats</Text>
      <Chat />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      {/* Hola "Nombre" */}
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Congresos" component={CongresosScreen} />
      <Drawer.Screen name="Calendario" component={CalendarioScreen} />
      <Drawer.Screen name="Links de interes" component={LinksScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="AdminPanel" component={AdminPanelScreen} />
      <Drawer.Screen name="Chat" component={ChatScreen} />

      {/*
      User
      Configuración(notificaciones push) */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

// export default function App() {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// }

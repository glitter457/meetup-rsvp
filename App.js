import React, { Component } from "react";
//import react in our code.
import { View, Image, TouchableOpacity } from "react-native";
// import all basic components

//For React Navigation 4+
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Registration from "./screens/Registration/Registration";

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require("./image/drawer.png")}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Registration,
    navigationOptions: ({ navigation }) => ({
      title: "Registration",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: "RSVP List",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Registration: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: "Registration"
    }
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: "RSVP List"
    }
  }
});

export default createAppContainer(DrawerNavigatorExample);

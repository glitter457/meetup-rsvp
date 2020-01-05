import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Animated
} from "react-native";
import styles from "./Style";
import AnimatedInput from "../../components/InputComponent/TextInput";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameAnimation: new Animated.Value(0),
      ageAnimation: new Animated.Value(0),
      dobAnimation: new Animated.Value(0),
      localityAnimation: new Animated.Value(0),
      numberOfGuestAnimation: new Animated.Value(0),
      addressAnimation: new Animated.Value(0),

      inputValue: {
        name: "",
        age: "",
        dob: "",
        locality: "",
        numberOfGuests: 0,
        address: ""
      },
      errors: {
        name: false,
        age: false,
        dob: false,
        locality: false,
        numberOfGuests: false,
        address: false
      },
      errorText: {
        name: "",
        age: "",
        dob: "",
        locality: "",
        numberOfGuests: 0,
        address: ""
      },
      loading: false
    };
  }

  componentDidMount() {
    const {
      nameAnimation,
      ageAnimation,
      dobAnimation,
      localityAnimation,
      numberOfGuestAnimation,
      addressAnimation
    } = this.state;
    Animated.stagger(100, [
      Animated.timing(nameAnimation, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(ageAnimation, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(dobAnimation, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(localityAnimation, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(numberOfGuestAnimation, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(addressAnimation, {
        toValue: 1,
        duration: 300
      })
    ]).start(() => {
      // this._email.getNode().focus();
    });
  }

  handleNameChange = value => {
    const { inputValue } = this.state;
    inputValue.name = value;
    this.setState({ inputValue });
  };
  handleNameBlur = () => {
    const { errors, errorText, inputValue } = this.state;
    if (String(inputValue.name).length === 0) {
      errors.email = true;
      errorText.email = "Name should not be empty";
    } else {
      errors.email = false;
      errorText.email = "";
    }
    this.setState({ errors, errorText });
  };
  render() {
    const createAnimationStyle = animation => {
      const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-5, 0]
      });
      return {
        opacity: animation,
        transform: [
          {
            translateY
          }
        ]
      };
    };
    const {
      nameAnimation,
      ageAnimation,
      dobAnimation,
      numberOfGuestAnimation,
      addressAnimation,
      localityAnimation,
      inputValue,
      errorText,
      errors,
      loading
    } = this.state;
    const nameStyle = createAnimationStyle(nameAnimation);
    const emailStyle = createAnimationStyle(emailAnimation);
    const passwordStyle = createAnimationStyle(passwordAnimation);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={styles.insideContainer}>
              <Text style={styles.headText}>Welcome to JS Meetup!</Text>
              <KeyboardAvoidingView style={styles.insideContainer}>
                <AnimatedInput
                  value={inputValue.name}
                  placeholder="Name"
                  placeholderTextColor={"rgb(65,67,78)"}
                  onChangeText={this.handleNameChange}
                  style={nameAnimation}
                  suggestionText={errorText.name}
                  onBlur={this.handleNameBlur}
                  isError={errors.name}
                ></AnimatedInput>
                <AnimatedInput
                  value={inputValue.age}
                  placeholder="Age"
                  placeholderTextColor={"rgb(65,67,78)"}
                  onChangeText={this.handleNameChange}
                  style={nameAnimation}
                  suggestionText={errorText.name}
                  onBlur={this.handleNameBlur}
                  isError={errors.email}
                ></AnimatedInput>
                <AnimatedInput
                  value={inputValue.dob}
                  placeholder="Name"
                  placeholderTextColor={"rgb(65,67,78)"}
                  onChangeText={this.handleNameChange}
                  style={nameAnimation}
                  suggestionText={errorText.name}
                  onBlur={this.handleNameBlur}
                  isError={errors.email}
                ></AnimatedInput>
                <AnimatedInput
                  value={inputValue.dob}
                  placeholder="Locality"
                  placeholderTextColor={"rgb(65,67,78)"}
                  onChangeText={this.handleLocality}
                  style={localityAnimation}
                  suggestionText={errorText.name}
                  onBlur={this.handleNameBlur}
                  isError={errors.email}
                ></AnimatedInput>
              </KeyboardAvoidingView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Animated,
  TouchableOpacity,
  Alert
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
  handleDOB = value => {
    const { inputValue } = this.state;
    inputValue.dob = value;
    this.setState({ inputValue });
  };
  handleAge = value => {
    const { inputValue } = this.state;
    inputValue.age = value;
    this.setState({ inputValue });
  };
  handleLocality = value => {
    const { inputValue } = this.state;
    inputValue.locality = value;
    this.setState({ inputValue });
  };
  handleNumerOfGuests = value => {
    const { inputValue } = this.state;
    inputValue.numberOfGuests = value;
    this.setState({ inputValue });
  };
  handleLocality = value => {
    const { inputValue } = this.state;
    inputValue.locality = value;
    this.setState({ inputValue });
  };
  handleAddress = value => {
    const { inputValue } = this.state;
    inputValue.address = value;
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

  handleSubmitted = () => {
    const {
      inputValue: { name, age, dob, locality, numberOfGuests, address }
    } = this.state;
    if (
      name !== 0 &&
      age !== 0 &&
      dob !== 0 &&
      locality !== 0 &&
      numberOfGuests !== 0 &&
      address !== 0
    ) {
      Alert.alert("Registration", "Thanks for visiting JS Meeetup");
    } else {
      Alert.alert("Error", "Fill all those fields");
    }
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
    const ageStyle = createAnimationStyle(ageAnimation);
    const dobStyle = createAnimationStyle(dobAnimation);
    const numberOfGuestStyle = createAnimationStyle(numberOfGuestAnimation);
    const addressStyle = createAnimationStyle(addressAnimation);
    const localityStyle = createAnimationStyle(localityAnimation);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={styles.insideContainer}>
              <Text style={styles.headText}>Welcome to JS Meetup!</Text>
              <KeyboardAvoidingView
                style={styles.insideContainer}
                behavior="padding"
                enabled
              >
                <AnimatedInput
                  value={inputValue.name}
                  placeholder="Name"
                  placeholderTextColor={"rgb(65,67,78)"}
                  onChangeText={this.handleNameChange}
                  style={nameStyle}
                  suggestionText={errorText.name}
                  onBlur={this.handleNameBlur}
                  isError={errors.name}
                ></AnimatedInput>
                <AnimatedInput
                  value={inputValue.age}
                  placeholder="Age"
                  placeholderTextColor={"rgb(65,67,78)"}
                  onChangeText={this.handleAge}
                  style={ageStyle}
                  suggestionText={errorText.age}
                  onBlur={this.handleNameBlur}
                  isError={errors.age}
                ></AnimatedInput>
                <AnimatedInput
                  value={inputValue.dob}
                  placeholder="Date Of Birth"
                  placeholderTextColor={"rgb(65,67,78)"}
                  onChangeText={this.handleDOB}
                  style={dobStyle}
                  suggestionText={errorText.dob}
                  onBlur={this.handleDOBBlur}
                  isError={errors.dob}
                ></AnimatedInput>
                <AnimatedInput
                  value={inputValue.locality}
                  placeholder="Locality"
                  placeholderTextColor={"rgb(65,67,78)"}
                  onChangeText={this.handleLocality}
                  style={localityStyle}
                  suggestionText={errorText.locality}
                  onBlur={this.handleLocalityBlur}
                  isError={errors.locality}
                ></AnimatedInput>
                <AnimatedInput
                  value={inputValue.numberOfGuests}
                  placeholder="Number Of Guests"
                  placeholderTextColor={"rgb(65,67,78)"}
                  onChangeText={this.handleNumerOfGuests}
                  style={numberOfGuestStyle}
                  suggestionText={errorText.numberOfGuests}
                  onBlur={this.handleNumerOfGuestsBlur}
                  isError={errors.numberOfGuests}
                ></AnimatedInput>
                <AnimatedInput
                  value={inputValue.address}
                  placeholder="Address"
                  placeholderTextColor={"rgb(65,67,78)"}
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={this.handleAddress}
                  style={addressStyle}
                  suggestionText={errorText.address}
                  onBlur={this.handleAddressBlur}
                  isError={errors.address}
                ></AnimatedInput>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.handleSubmitted}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

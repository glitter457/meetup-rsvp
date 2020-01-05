import React from "react";
import { TextInput, View, Text, Animated } from "react-native";

// Styles
import Styles from "./Styles";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const AnimatedInput = ({
  style,
  value,
  placeholder,
  placeholderTextColor,
  onChangeText,
  isError,
  suggestionText,
  secureTextEntry,
  onBlur,
  autoCapitalize = "none",
  keyboardType = "default"
}) => {
  return (
    <View style={Styles.containerWidth}>
      <AnimatedTextInput
        style={[Styles.container, style, isError && Styles.error]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        onKeyPress={event =>
          (event.charCode >= 65 && event.charCode <= 90) ||
          (event.charCode >= 97 && event.charCode <= 122)
        }
      />
      {isError && (
        <View style={Styles.errorContainer}>
          <Text style={Styles.errorText}>{suggestionText}</Text>
        </View>
      )}
    </View>
  );
};

export default AnimatedInput;

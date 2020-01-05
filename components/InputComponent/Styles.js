import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 18.5,
    paddingTop: 11,
    paddingBottom: 10,
    color: "#000",
    fontSize: 16,
    marginBottom: 16,
    width: "100%",
    height: 42
  },
  containerWidth: {
    width: "100%"
  },
  error: {
    borderColor: "red",
    marginBottom: 4
  },
  errorContainer: {
    backgroundColor: "red",
    borderRadius: 5,
    paddingVertical: 4,
    paddingLeft: 18.5,
    paddingRight: 20,
    marginBottom: 16,
    opacity: 1
  },
  errorText: {
    color: "red",
    fontSize: 14
  }
});

export default Styles;

import { StyleSheet } from "react-native";
import DimensionConstants from "../../constants/Dimensions";

const mobileStyles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: DimensionConstants.WINDOW_DIMENSIONS.HEIGHT - 56,
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "rgb(248, 248, 248)"
  },
  insideContainer: {
    width: DimensionConstants.WINDOW_DIMENSIONS.WIDTH - 110,
    alignItems: "center",
    justifyContent: "center"
  },
  headText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 34
  },
  btnsContainer1: {
    width: "100%",
    marginBottom: 15
  },
  btnsContainer2: {
    width: "100%",
    marginBottom: 86
  },
  btnContainer: {
    marginBottom: 16
  },
  forgotText: {
    marginBottom: 31.7
  },
  spaceBetween: {
    width: "100%",
    justifyContent: "space-between"
  },
  button: {
    flex: 1,
    width: 100,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FF9800",
    borderRadius: 7
  },
  buttonText: {
    color: "#fff"
  }
});

export default mobileStyles;

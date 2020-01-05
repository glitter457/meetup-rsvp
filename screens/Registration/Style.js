import { StyleSheet } from "react-native";
import DimensionConstants from "../../constants/Dimensions";

const mobileStyles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: DimensionConstants.WINDOW_DIMENSIONS.HEIGHT - 56,
    alignItems: "center",
    // justifyContent: 'center',
    paddingVertical: 40,
    backgroundColor: "rgb(248, 248, 248)"
  },
  insideContainer: {
    width: DimensionConstants.WINDOW_DIMENSIONS.WIDTH - 110,
    alignItems: "center",
    justifyContent: "center"
  },
  headText: {
    color: LightTheme.colorSignInText,
    fontSize: 24,
    fontWeight: 600,
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
  borderBtm: {
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
    width: "30%",
    marginBottom: 28.5
  },
  signInText: {
    color: LightTheme.CharcoalGrey,
    fontSize: 16,
    // marginBottom: 27,
    textAlign: "center"
  },
  forgotText: {
    marginBottom: 31.7
  },
  spaceBetween: {
    width: "100%",
    justifyContent: "space-between"
  }
});

export default mobileStyles;

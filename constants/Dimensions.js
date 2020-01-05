import { Dimensions } from "react-native";

const DimensionConstants = {
  WINDOW_DIMENSIONS: {
    HEIGHT: Dimensions.get("window").height,
    WIDTH: Dimensions.get("window").width
  }
};

export default DimensionConstants;

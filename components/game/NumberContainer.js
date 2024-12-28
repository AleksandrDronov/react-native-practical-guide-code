import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}> 
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;
const isSmallScreen = deviceWidth < 380;

const styles = StyleSheet.create({
  container: {
	borderWidth: 4,
	borderColor: Colors.accent500,
	padding: isSmallScreen ? 12 : 24,
	borderRadius: 8,
	margin: isSmallScreen ? 12 : 24,
	alignItems: "center",
	justifyContent: "center",
  },
  numberText: {		
	fontFamily: "open-sans-bold",
	fontSize: isSmallScreen ? 28 : 36,
	color: Colors.accent500,
  },
});

import { Image, View, StyleSheet, Text, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ userNumber, guessRounds, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 420) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={styles.screenContainer}>
      <Title>Game Over</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlightedText}>{guessRounds}</Text> tries to
          guess the number{" "}
          <Text style={styles.highlightedText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightedText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

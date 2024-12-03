import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ id, text, onDeleteGoal }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteGoal.bind(this, id)}
        android_ripple={{ color: "#49247a" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

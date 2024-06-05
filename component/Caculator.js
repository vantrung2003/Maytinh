import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch (e) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else if (value === "DEL") {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.textname}>CACULATOR</Text>
      </View>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.buttons}>
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
          "C",
          "DEL",
        ].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => handlePress(item)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  display: {
    fontSize: 48,
    padding: 20,
    textAlign: "right",
    backgroundColor: "#f0f0f0",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    width: "25%",
    padding: 20,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  buttonText: {
    fontSize: 24,
  },
  textname: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 35,
    textAlign: "center",
  },
});

export default Calculator;

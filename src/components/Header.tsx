import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ticket Now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 25,
  },
  text: {
    fontSize: 18,
    color: colors.green,
    fontFamily: fonts.heading,
  },
});

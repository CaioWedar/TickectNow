import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, StyleSheet, Text } from "react-native";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

const Login = () => {
  const navigation = useNavigation();
  const handleLoginNavigation = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ticket Now</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nome: </Text>
          <TextInput style={styles.inputText} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Senha: </Text>
          <TextInput style={styles.inputText} />
        </View>
        <Button title="Entrar" onPress={() => handleLoginNavigation()} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    height: 230,
    width: 280,
    alignSelf: "center",
    justifyContent: "space-around",

    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  inputLabel: {
    fontFamily: fonts.text,
    color: colors.green,
  },
  inputText: {
    fontFamily: fonts.text,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  headerText: {
    fontSize: 40,
    fontFamily: fonts.heading,
    color: colors.green,
  },
});

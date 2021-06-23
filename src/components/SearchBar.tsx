import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import colors from "../styles/colors";
import { TouchableHighlight } from "react-native";

export function SearchBar({ onSearchHandle }: any) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [searchEntry, setSearchEntry] = useState("");
  const [name, setName] = useState<string>();

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
    setSearchEntry(value);
  };

  const handleSubmmitSearch = () => {
    onSearchHandle(searchEntry.trim().toUpperCase());
  };

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.container,
            (isFocused || isFilled) && { borderColor: colors.green },
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Digite o nome de um evento"
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChangeText={handleInputChange}
          />
          <TouchableHighlight>
            <EvilIcons
              name="search"
              size={24}
              color="black"
              style={styles.button}
              onPress={handleSubmmitSearch}
            />
          </TouchableHighlight>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray,
  },
  input: {
    width: "80%",
    textAlign: "center",
    padding: 10,

    fontSize: 18,
    color: colors.heading,
  },
  button: {
    marginRight: 5,
  },
});

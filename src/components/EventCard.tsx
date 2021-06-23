import React from "react";
import { TouchableOpacity } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacityProps,
} from "react-native";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface CardProps extends TouchableOpacityProps {
  title: string;
  image: string;
  category: string;
  date: string;
  location: string;
  schedule: string;
}

export function EventCard({
  image,
  title,
  category,
  date,
  location,
  schedule,
  ...rest
}: CardProps) {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} {...rest}>
      <ImageBackground
        style={styles.backgroundImage}
        imageStyle={styles.image}
        source={{
          uri: image,
        }}
      >
        <View style={styles.dateContainer}>
          <AntDesign name="calendar" size={18} color={`${colors.green}`} />
          <Text style={styles.subtitleTextDate}>{`${date}`}</Text>
          <FontAwesome5 name="clock" size={16} color={`${colors.green}`} />
          <Text style={styles.hoursText}>{`${schedule}`}</Text>
        </View>
        <Text style={styles.text}>{`${title}`}</Text>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{`${category}`}</Text>
          <Entypo name="location-pin" size={20} color={`${colors.green}`} />
          <Text style={styles.locationText}>{`${location}`}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 256,
    height: 310,
    borderRadius: 25,
    shadowColor: colors.black,
    backgroundColor: colors.blue,
    borderWidth: 1,
    borderColor: colors.black,
    marginVertical: 5,
  },
  text: {
    textShadowRadius: 3,
    textShadowColor: colors.black,
    position: "absolute",
    bottom: 26,
    left: 0,
    marginBottom: 12,
    marginLeft: 10,
    color: colors.green,
    fontFamily: fonts.text,
    fontSize: 20,
    textDecorationLine: "underline",
  },
  categoryContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    bottom: 0,
    left: 2,
    marginBottom: 10,
    marginLeft: 10,
  },
  locationText: {
    textShadowRadius: 3,
    textShadowColor: colors.black,
    color: colors.green,
    fontFamily: fonts.text,
    fontSize: 12,
    marginLeft: 2,
    marginRight: 10,
  },
  categoryText: {
    textShadowRadius: 3,
    textShadowColor: colors.black,
    color: colors.green,
    fontFamily: fonts.text,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  hoursText: {
    textShadowRadius: 3,
    textShadowColor: colors.black,
    color: colors.green,
    fontFamily: fonts.text,
    fontSize: 12,
    marginLeft: 5,
    marginRight: 10,
  },
  dateContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    bottom: 60,
    left: 0,
    marginBottom: 10,
    marginLeft: 10,
  },
  subtitleTextDate: {
    textShadowRadius: 3,
    textShadowColor: colors.black,
    color: colors.green,
    fontFamily: fonts.text,
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 25,
  },
});

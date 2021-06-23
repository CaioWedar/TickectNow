import React from "react";
import { useNavigation } from "@react-navigation/core";
import MapView, { Marker } from "react-native-maps";
import {
  SafeAreaView,
  View,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";
import { AntDesign, Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

const initialCards = [
  {
    id: "123",
    title: "Evento de Biologia",
    image:
      "https://englishlive.ef.com/pt-br/blog/wp-content/uploads/sites/16/2017/08/palestras_em_ingles-1.jpg",
    category: "Biologia",
    date: "20 de Agosto de 2021",
    location: "São Paulo/SP",
    description:
      "Uma palestra completa sobre engenharia, para crescer como profissional ou estudante e acumular conhecimento",
    schedule: "4hs - 18hs",
    value: "R$ 44,50",
    initialPlace: {
      latitude: -23.5114,
      longitude: -46.6125,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
    coordinates: {
      latitude: -23.5114,
      longitude: -46.6125,
    },
  },
  {
    id: "456",
    title: "Evento de Finanças",
    image:
      "https://realizartepalestras.com.br/wp-content/uploads/2017/07/105937-palestras-corporativas-afinal-porque-sao-importantes.jpg",
    category: "Finanças",
    date: "15 de Agosto de 2021",
    location: "São Paulo/SP",
    description:
      "Uma workshop completa sobre finanças, para crescer como profissional ou estudante e acumular conhecimento",
    schedule: "1hs - 14hs",
    value: "R$ 73,80",
    initialPlace: {
      latitude: -23.5114,
      longitude: -46.6125,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
    coordinates: {
      latitude: -23.5114,
      longitude: -46.6125,
    },
  },
  {
    id: "789",
    title: "Evento Empresarial",
    image:
      "https://insperiencia.com.br/blog/wp-content/uploads/2017/06/temas-para-palestras-750x375.jpg",
    category: "Negócios",
    date: "23 de Agosto de 2021",
    location: "São Paulo/SP",
    description:
      "Uma palestra completa sobre gestão empresarial, para crescer como profissional ou estudante acumulando conhecimento",
    schedule: "8hs - 21hs",
    value: "R$ 144,00",
    initialPlace: {
      latitude: -23.5114,
      longitude: -46.6125,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
    coordinates: {
      latitude: -23.5114,
      longitude: -46.6125,
    },
  },
];

type ParamList = {
  EventDescription: {
    id: string;
  };
};

const EventDescription = () => {
  const navigation = useNavigation();

  // const route = useRoute();
  const route = useRoute<RouteProp<ParamList, "EventDescription">>();
  const id = route.params.id;
  const eventCard = initialCards.find((card) => {
    return id === card.id;
  });

  const handleStart = (
    value: string,
    title: string,
    location: string,
    description: string
  ) => {
    navigation.navigate("Payment", {
      valuePrice: value,
      eventTitle: title,
      eventLocation: location,
      eventDescription: description,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={{
            uri: eventCard?.image,
          }}
          style={styles.headerImg}
        >
          <View style={styles.arrowBackContainer}>
            <Ionicons
              name="arrow-back"
              size={32}
              color={`${colors.green}`}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.dateContainer}>
            <AntDesign name="calendar" size={18} color={`${colors.green}`} />
            <Text style={styles.subtitleTextDate}>{`${eventCard?.date}`}</Text>
            <FontAwesome5 name="clock" size={16} color={`${colors.green}`} />
            <Text style={styles.hoursText}>{`${eventCard?.schedule}`}</Text>
          </View>
          <Text style={styles.text}>{`${eventCard?.title}`}</Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{`${eventCard?.category}`}</Text>
            <Entypo name="location-pin" size={24} color={`${colors.green}`} />
            <Text style={styles.locationText}>{`${eventCard?.location}`}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Descrição</Text>
        <Text
          style={styles.descriptionText}
        >{`${eventCard?.description}`}</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView initialRegion={eventCard?.initialPlace} style={styles.map}>
          <Marker coordinate={{ latitude: -23.5114, longitude: -46.6125 }} />
        </MapView>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={`Compre o ingresso por ${eventCard?.value}`}
          onPress={() =>
            handleStart(
              eventCard?.value as string,
              eventCard?.title as string,
              eventCard?.location as string,
              eventCard?.description as string
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};
export default EventDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "relative",
    width: 360,
    height: 250,
  },
  headerImg: {
    flex: 1,
    position: "relative",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    bottom: 26,
    left: 0,
    marginBottom: 10,
    marginLeft: 10,
    color: colors.gray,
    fontFamily: fonts.heading,
    fontSize: 25,
    textDecorationLine: "underline",
  },
  categoryContainer: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    left: 0,
    marginBottom: 10,
    marginLeft: 5,
  },
  locationText: {
    color: colors.gray,
    fontFamily: fonts.text,
    fontSize: 15,
    marginLeft: 2,
    marginRight: 10,
  },
  categoryText: {
    color: colors.gray,
    fontFamily: fonts.text,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  hoursText: {
    color: colors.gray,
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
    color: colors.gray,
    fontFamily: fonts.text,
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10,
  },
  descriptionContainer: {
    flex: 1,
    padding: 12,
    borderBottomWidth: 1,
    marginHorizontal: 17,
    marginVertical: 10,
    borderBottomColor: colors.gray,
  },
  descriptionTitle: {
    fontFamily: fonts.heading,
    fontSize: 16,
    marginBottom: 9,
  },
  descriptionText: {
    fontFamily: fonts.text,
    fontSize: 15,
    marginBottom: 5,
    paddingLeft: 5,
  },
  buttonContainer: {
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 7,
    height: 70,
    width: 250,
  },
  arrowBackContainer: {
    position: "absolute",
    left: 10,
    top: 22,
  },
  mapContainer: {
    flex: 1,
    height: 210,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    marginBottom: 24,

    borderWidth: 1,
    borderRadius: 25,

    backgroundColor: "#fff",
    borderColor: colors.green,
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

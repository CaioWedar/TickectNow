import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { EventCard } from "../components/EventCard";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

const initialCards = [
  {
    id: "123",
    title: "Evento de Engenharia",
    image:
      "https://englishlive.ef.com/pt-br/blog/wp-content/uploads/sites/16/2017/08/palestras_em_ingles-1.jpg",
    category: "Engenharia",
    date: "20 de Agosto de 2021",
    location: "São Paulo/SP",
    description:
      "Uma palestra completa sobre engenharia, para crescer como profissonal ou estudante e acumular conhecimento",
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
    description: "Um workshop sobre finanças",
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
    description: "Palestra de como administrar seus negócios",
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

const EventList = () => {
  const navigation = useNavigation();

  const handleDescNavigation = (itemId: string) => {
    navigation.navigate("EventDescription", { id: itemId });
  };

  const emptyListMessage = (message: string) => {
    return (
      <View style={styles.emptyCardList}>
        <Text style={styles.emptyCardText}>{message}</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back"
          size={32}
          color={`${colors.green}`}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Todos Eventos</Text>
      </View>
      <TouchableWithoutFeedback>
        <View style={{}}>
          <FlatList
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
            data={initialCards}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() =>
              emptyListMessage("Por enquanto não tem nenhum evento!")
            }
            renderItem={({ item, index }) => (
              <View
                style={{
                  alignSelf: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: colors.gray,
                }}
              >
                <EventCard
                  title={item.title}
                  image={item.image}
                  category={item.category}
                  date={item.date}
                  location={item.location}
                  schedule={item.schedule}
                  onPress={() => handleDescNavigation(item.id)}
                />
              </View>
            )}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  emptyCardList: {
    width: 310,
    height: 310,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  emptyCardText: {
    color: colors.green,
    fontFamily: fonts.heading,
    fontSize: 20,
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
  headerContainer: {
    height: 50,
    width: 280,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 20,
  },
  headerText: {
    fontFamily: fonts.heading,
    fontSize: 16,
    color: colors.green,
    marginRight: 20,
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";

import { EventCard } from "../components/EventCard";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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

const initialButtons = [
  {
    title: "Limpar",
    category: "Limpar",
  },
  {
    title: "Biologia",
    category: "Biologia",
  },
  {
    title: "Finanças",
    category: "Finanças",
  },
  {
    title: "Geografia",
    category: "Geografia",
  },
  {
    title: "Negócios",
    category: "Negócios",
  },
  {
    title: "Turismo",
    category: "Turismo",
  },
  {
    title: "Engenharia",
    category: "Engenharia",
  },
];

type ParamList = {
  LoginValue: {
    confirmation: boolean;
  };
};

const Home = () => {
  const [eventCards, setEventCards] = useState(initialCards);
  const navigation = useNavigation();

  const handleDescNavigation = (itemId: string) => {
    navigation.navigate("EventDescription", { id: itemId });
  };

  const handleLoginNavigation = () => {
    navigation.navigate("Login");
  };
  const handleListNavigation = () => {
    navigation.navigate("EventList");
  };

  const handleFilter = (category: string) => {
    if (category !== "Limpar") {
      setEventCards(initialCards.filter((card) => card.category === category));
    } else if (category === "Limpar") {
      setEventCards(initialCards);
    }
  };

  const emptyListMessage = (message: string) => {
    return (
      <View style={styles.emptyCardList}>
        <Text style={styles.emptyCardText}>{message}</Text>
      </View>
    );
  };

  const handleSearchRequest = (searchResult: string) => {
    if (searchResult !== "") {
      setEventCards(
        initialCards.filter((card) => {
          return card.title.toUpperCase().includes(searchResult);
        })
      );
    } else {
      setEventCards(initialCards);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center" }}
    >
      <View>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.searchBar}>
          <SearchBar onSearchHandle={handleSearchRequest} />
        </View>
        <View style={styles.listButton}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps={"never"}
          >
            <TouchableWithoutFeedback>
              <FlatList
                ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
                data={initialButtons}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <Button
                    title={item.title}
                    onPress={() => handleFilter(item.category)}
                  />
                )}
              />
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Eventos disponíveis:</Text>
        </View>
        <View style={styles.listEvent}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableWithoutFeedback>
              <View>
                <FlatList
                  ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
                  data={eventCards}
                  horizontal={true}
                  keyExtractor={(item, index) => index.toString()}
                  ListEmptyComponent={() =>
                    emptyListMessage("Por enquanto não tem nenhum evento!")
                  }
                  renderItem={({ item, index }) => (
                    <EventCard
                      title={item.title}
                      image={item.image}
                      category={item.category}
                      date={item.date}
                      location={item.location}
                      schedule={item.schedule}
                      onPress={() => handleDescNavigation(item.id)}
                    />
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>
        <View style={styles.tabBarContainer}>
          <View style={styles.tabBar}>
            <TouchableOpacity>
              <FontAwesome
                name="ticket"
                size={24}
                color="white"
                onPress={() => handleListNavigation()}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome
                name="user-circle-o"
                size={24}
                color="white"
                onPress={() => handleLoginNavigation()}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingLeft: 17,
    paddingTop: 30,
  },
  header: {
    position: "relative",
    width: "100%",
    marginTop: 10,
  },
  content: {
    width: "100%",
  },
  listButton: {
    width: "auto",
    height: "auto",
    marginBottom: 10,
  },
  listEvent: {
    height: "auto",
    marginTop: 13,
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
  labelContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 2,
  },
  label: {
    fontSize: 20,
    fontFamily: fonts.heading,
  },
  searchBar: {
    width: "95%",
    marginBottom: 18,
    marginRight: 10,
  },
  tabBarContainer: {
    marginTop: 5,
    marginRight: 10,
    alignItems: "center",
    padding: 0,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  tabBar: {
    width: 220,
    height: 58,
    backgroundColor: colors.green,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 40,
  },
});

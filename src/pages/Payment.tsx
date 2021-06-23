import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";
import { StripeProvider, CardField } from "@stripe/stripe-react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

type ParamList = {
  PaymentValue: {
    valuePrice: string;
    eventTitle: string;
    eventLocation: string;
    eventDescription: string;
  };
};

const Payment = () => {
  const route = useRoute<RouteProp<ParamList, "PaymentValue">>();
  const value = route.params.valuePrice;
  const title = route.params.eventTitle;
  const location = route.params.eventLocation;
  const description = route.params.eventDescription;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.eventInfoContainer}>
        <View style={styles.eventInfoContent}>
          <View>
            <Text style={styles.eventInfo}>{title}</Text>
            <Text style={styles.eventInfo}>{location}</Text>
            <Text style={styles.eventInfo}>Descrição:</Text>
          </View>
          <View>
            <Text style={styles.eventValue}>{value}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.eventDecription}>{description}</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>Nome:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Endereço:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Email:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Cidade:</Text>
        <TextInput style={styles.input} />
      </View>
      <StripeProvider publishableKey="pk_test_51J58pvEHjGO1nYutjxgReGnAOdLFLEOHs1jBxvatqjBNwhcIvJwUrAT4f0Gz9OebAisVM2VVFNSbLEYcCYOXt72c00RXeEgwJy">
        <View style={styles.paymentContainer}>
          <CardField
            postalCodeEnabled={true}
            placeholder={{
              number: "4242 4242 4242 4242",
            }}
            cardStyle={{
              textColor: colors.green,
              borderWidth: 1,
              borderColor: colors.green,
              borderRadius: 10,
            }}
            style={styles.paymentCard}
          />
        </View>
      </StripeProvider>
      <View style={styles.buttonContainer}>
        <Button title="Confirmar pagamento" />
      </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paymentContainer: {
    flex: 1,
  },
  header: {
    position: "relative",
    width: "100%",
    paddingTop: 25,
    paddingBottom: 15,
    paddingLeft: 15,
  },
  inputContainer: {
    marginHorizontal: 17,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  input: {
    fontFamily: fonts.text,
  },
  paymentCard: {
    alignSelf: "center",
    height: 50,
    width: "90%",
    marginVertical: 30,
  },
  title: {
    fontFamily: fonts.complement,
    color: colors.green,
    fontSize: 15,
    marginRight: 4,
  },
  buttonContainer: {
    width: "90%",
    marginVertical: 10,
    marginHorizontal: 17,
  },
  eventInfoContainer: {
    padding: 15,
    alignSelf: "center",
    flexDirection: "column",
    borderWidth: 1,
    height: 200,
    width: 300,
    marginVertical: 15,
    borderRadius: 25,
    borderColor: colors.gray,
  },
  eventInfoContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eventInfo: {
    fontFamily: fonts.heading,
    fontSize: 17,
  },
  eventDecription: {
    fontFamily: fonts.text,
    fontSize: 17,
    padding: 5,
  },
  eventValue: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textDecorationLine: "underline",
  },
});

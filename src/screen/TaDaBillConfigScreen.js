import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderSection from "../../components/HeaderSection";
import PopupText from "../../components/particles/PopupText";
import CommonButton from "../../components/buttons/CommonButton";
import { Colors } from "../theme/colors/colors";
import HomeIconButton from "../../components/buttons/HomeIconButton";

const TaDaBillConfigScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderSection tittle="TA DA Bill" />

      <View style={styles.textContainer}>
        <View style={styles.textsContainer}>
          <PopupText
            tittle="Your TA bill request has"
            secondTittle="sent to Admin"
          />
        </View>
      </View>

      <View>
        <CommonButton tittle="View PDF" />
      </View>

      <View style={styles.homeLink}>
        <HomeIconButton
          img={require("../../assets/icons/small_homeIcon.png")}
        />
      </View>
    </View>
  );
};

export default TaDaBillConfigScreen;

const styles = StyleSheet.create({
  textContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "35%",
  },
  textsContainer: {},
  homeLink: {
    marginTop: 90,
  },
});

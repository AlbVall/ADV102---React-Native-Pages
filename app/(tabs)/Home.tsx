import React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Learn How </Text>
        <Text style={styles.headerText}>To Care Duck</Text>

      </View>
    <View style={styles.pictures}>
   <Image source={{uri: 'https://i.pinimg.com/736x/51/38/4e/51384e59f2968bc46262c3e05658ee61.jpg'}}
       style={{width: 400, height: 400}} />
       </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F6F6F6",
  },
  header: {
    backgroundColor: "#F0A44C",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  introduction: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f1f1f1",
  },
  pictures: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 500
  }

});

import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Services() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Our Services</Text>
      </View>

      {/* Introduction */}
      <View style={styles.introduction}>
        <Text style={styles.boldbigText}>
          At our center, we offer various services to help you learn more about
          animals, including caring for ducks! Below, you can learn how to properly pet a duck.
        </Text>
      </View>

      {/* How to Pet a Duck Section */}
      <View style={styles.howToPetSection}>
        <Text style={styles.sectionTitle}>How to Pet a Duck</Text>

        
        {/*My Duck Image*/}
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/51/38/4e/51384e59f2968bc46262c3e05658ee61.jpg',
          }}
          style={styles.duckImage}  // Applying the style from StyleSheet
        />


<Text style={styles.boldbigText}>
          Ducks are gentle creatures, but it's important to approach them with care. Follow these steps to pet a duck:
        </Text>
        
        <Text style={styles.stepText}>
        <Text style={styles.boldText}>1. Approach Slowly: </Text>  Ducks can be skittish, so make sure to approach them calmly and slowly. 
        </Text>
        <Text style={styles.stepText}>
        <Text style={styles.boldText}>2. Let Them Get Comfortable: </Text> Allow the duck to come to you and sniff your hand before touching it.
        </Text>
        <Text style={styles.stepText}>
        <Text style={styles.boldText}>3. Pet Gently: </Text> Use a light touch when petting the duck, particularly around its head and back.
        </Text>
        <Text style={styles.stepText}>
        <Text style={styles.boldText}>4. Avoid the Wings and Tail: </Text> Ducks are sensitive around their wings and tails, so avoid those areas.
        </Text>
        <Text style={styles.stepText}>
        <Text style={styles.boldText}>5. Watch for Signs of Discomfort: </Text> If the duck starts to move away or seems agitated, stop petting and give it space.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    backgroundColor: "#F0A44C",  
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  introduction: {
    padding: 20,
    backgroundColor: "#f1f1f1",
  },
  introText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  howToPetSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 550
  },
  duckImage: {
    width: 400,
    height: 300,
    marginLeft: 450,
    borderRadius: 10,
    marginBottom: 20,
  },
  stepText: {
    fontSize: 16,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  boldbigText: {
    fontWeight: 'bold',
    fontSize: 18
  },
});

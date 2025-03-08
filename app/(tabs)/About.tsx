import { View, ScrollView, Text, StyleSheet } from "react-native";
import React from "react";

export default function About() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>About</Text>
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>What We Do</Text>
        <Text style={styles.aboutText}>
          Welcome to our Application! We are passionate about ducks and want to provide all the information
          you need to take care of them. Whether you're a new duck owner or just interested in learning
          more about these fascinating creatures, we have tips, guides, and resources to help.
        </Text>

        <Text style={styles.aboutText}>
          Our mission is to educate and support individuals who want to keep ducks as pets. Ducks are wonderful,
          gentle animals that can thrive with the right care. On this site, you'll find detailed advice on feeding,
          housing, and handling your duck. We also offer tips on how to create a happy, healthy environment for your duck to
          enjoy!
        </Text>

        <Text style={styles.aboutText}>
          Whether you're curious about how to set up a duck house or how to keep your duck entertained, we have the information
          to make your journey as a duck owner enjoyable and successful.
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
  aboutSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 560,
  },
  aboutText: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft:20,
    textAlign: "center",  
  },
 
});

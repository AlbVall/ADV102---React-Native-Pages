import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Settings() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSpacer} />
        
        <TouchableOpacity style={[styles.button, styles.profileButton]}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>

        <View style={styles.buttonSpacer} />
        
        <TouchableOpacity style={[styles.button, styles.contactsButton]}>
          <Text style={styles.buttonText}>Contacts</Text>
        </TouchableOpacity>

        <View style={styles.buttonSpacer} />
        
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
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
  buttonContainer: {
    padding: 20,
  },
  buttonSpacer: {
    marginBottom: 15,
  },
  button: {
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "20%", 
    alignSelf: "center", 
  },
  profileButton: {
    backgroundColor: "#4CAF50",
  },
  contactsButton: {
    backgroundColor: "#007BFF",
  },
  logoutButton: {
    backgroundColor: "#FF4500",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

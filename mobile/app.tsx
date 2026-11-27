
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";

export default function App() {
  const [language, setLanguage] = useState<"en" | "fr">("en");

  const french = language === "fr";

  const showDemo = (feature: string) => {
    Alert.alert(
      french ? "Prototype UNAFF" : "UNAFF Prototype",
      french
        ? `${feature} : fonctionnalité de démonstration uniquement.`
        : `${feature}: demonstration feature only.`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.logo}>
            UNAFF <Text style={styles.gold}>DIGITAL</Text>
          </Text>
          <Text style={styles.headerText}>
            {french ? "Banque numérique" : "Digital Banking"}
          </Text>

          <TouchableOpacity
            style={styles.language}
            onPress={() =>
              setLanguage(french ? "en" : "fr")
            }
          >
            <Text style={styles.languageText}>
              {french ? "English" : "Français"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.welcome}>
            {french ? "Bienvenue !" : "Welcome!"}
          </Text>

          <Text style={styles.subtitle}>
            {french
              ? "Votre expérience bancaire numérique"
              : "Your digital banking experience"}
          </Text>

          <View style={styles.notice}>
            <Text style={styles.noticeText}>
              DEMONSTRATION ONLY · NO REAL MONEY
            </Text>
          </View>

          <View style={styles.balance}>
            <Text style={styles.balanceLabel}>
              {french ? "Solde de démonstration" : "Demo balance"}
            </Text>

            <Text style={styles.amount}>2,500,000 XAF</Text>

            <Text style={styles.account}>
              {french ? "Compte démo" : "Demo Account"} ···· 4582
            </Text>
          </View>

          <Text style={styles.sectionTitle}>
            {french ? "Services bancaires" : "Banking Services"}
          </Text>

          <View style={styles.grid}>
            {[
              {
                icon: "💸",
                en: "Transfer Money",
                fr: "Transfert",
              },
              {
                icon: "💳",
                en: "My Accounts",
                fr: "Mes comptes",
              },
              {
                icon: "📊",
                en: "Transactions",
                fr: "Transactions",
              },
              {
                icon: "👤",
                en: "My Profile",
                fr: "Mon profil",
              },
            ].map((item) => (
              <TouchableOpacity
                key={item.en}
                style={styles.service}
                onPress={() =>
                  showDemo(french ? item.fr : item.en)
                }
              >
                <Text style={styles.icon}>{item.icon}</Text>
                <Text style={styles.serviceText}>
                  {french ? item.fr : item.en}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>
            {french ? "Activité récente" : "Recent Activity"}
          </Text>

          <View style={styles.activity}>
            <Text style={styles.activityTitle}>
              {french ? "Dépôt exemple" : "Sample Deposit"}
            </Text>
            <Text style={styles.positive}>+150,000 XAF</Text>
          </View>

          <View style={styles.activity}>
            <Text style={styles.activityTitle}>
              {french ? "Paiement exemple" : "Sample Payment"}
            </Text>
            <Text style={styles.negative}>-25,000 XAF</Text>
          </View>

          <Text style={styles.disclaimer}>
            UNAFF independent demonstration prototype.
            No real banking services are provided.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f6fb",
  },
  header: {
    backgroundColor: "#071629",
    padding: 22,
  },
  logo: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  gold: {
    color: "#d9ad52",
  },
  headerText: {
    color: "#cbd5e1",
    marginTop: 6,
  },
  language: {
    alignSelf: "flex-end",
    backgroundColor: "#183958",
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
  },
  languageText: {
    color: "white",
  },
  content: {
    padding: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#071629",
  },
  subtitle: {
    color: "#64748b",
    marginTop: 7,
  },
  notice: {
    backgroundColor: "#fff1ce",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  noticeText: {
    color: "#805c19",
    fontSize: 11,
    fontWeight: "bold",
  },
  balance: {
    backgroundColor: "#071629",
    padding: 25,
    borderRadius: 16,
    marginTop: 20,
  },
  balanceLabel: {
    color: "#cbd5e1",
  },
  amount: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 14,
  },
  account: {
    color: "#d9ad52",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#071629",
    marginTop: 28,
    marginBottom: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  service: {
    width: "47%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    minHeight: 110,
    justifyContent: "center",
  },
  icon: {
    fontSize: 27,
    marginBottom: 10,
  },
  serviceText: {
    fontWeight: "bold",
    color: "#172438",
  },
  activity: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
  },
  activityTitle: {
    color: "#172438",
  },
  positive: {
    color: "green",
    fontWeight: "bold",
  },
  negative: {
    color: "#d64545",
    fontWeight: "bold",
  },
  disclaimer: {
    color: "#64748b",
    fontSize: 12,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 25,
  },
});

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { viewStyles, textStyles } from "./styles";
import { Header, Contents, Footer } from "./components/Layout";

const App = () => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <Text
    //     style={{ padding: 10, fontSize: 26, fontWeight: "600", color: "black" }}
    //   >
    //     Inline Styling - Text
    //   </Text>

    //   <Text
    //     style={{ padding: 10, fontSize: 26, fontWeight: "400", color: "red" }}
    //   >
    //     Inline Styling - Error
    //   </Text>
    // </View>

    // <View style={viewStyles.container}>
    //   <Text style={[textStyles.text, { color: "green" }]}>
    //     Inline Styling - Text
    //   </Text>
    //   <Text style={[textStyles.text, textStyles.error]}>
    //     Inline Styling - Error
    //   </Text>
    // </View>

    <View style={viewStyles.container}>
      <Header />
      <Contents />
      <Footer />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     padding: 10,
//     fontSize: 26,
//     fontWeight: "600",
//     color: "black",
//   },
//   error: {
//     fontWeight: "400",
//     color: "red",
//   },
// });

export default App;

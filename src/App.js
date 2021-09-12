import React, { useState } from 'react';
import { Switch, StyleSheet, View, Text } from 'react-native';
import { viewStyles, textStyles } from './styles';
import { Header, Contents, Footer } from './components/Layout';
import ShadowBox from './components/ShadowBox';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Input from './components/Input';
import { lightTheme, darkTheme } from './theme';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);

  return (
    // 인라인 스타일
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

    // 클래스 스타일
    // <View style={viewStyles.container}>
    //   <Text style={[textStyles.text, { color: "green" }]}>
    //     Inline Styling - Text
    //   </Text>
    //   <Text style={[textStyles.text, textStyles.error]}>
    //     Inline Styling - Error
    //   </Text>
    // </View>

    // flex layout
    // <View style={viewStyles.container}>
    //   <Header />
    //   <Contents />
    //   <Footer />
    // </View>

    // 그림자 효과
    // <View style={viewStyles.container}>
    //   <ShadowBox />
    // </View>

    // 스타일드 컴포넌트 사용하여 버튼 만들기
    // <Container>
    //   <Button title="Hanbit" />
    //   <Button title="React Native" />
    // </Container>

    // attrs 사용
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Switch value={isDark} onValueChange={_toggleSwitch} />
        <Button title="Hanbit" />
        <Button title="React Native" />
        <Input borderColor="#3498db" />
        <Input borderColor="#9b59b6" />
      </Container>
    </ThemeProvider>
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

import styled, { ThemeProvider } from "styled-components";
import Header from "./component/common/Header";
import { Router } from "./router";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Router />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background: #eee;
`;

export default App;

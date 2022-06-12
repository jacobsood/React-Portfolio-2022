import { FunctionComponent } from "react";
import styled from "styled-components";
// import { remToPx } from "../UI";

const Container = styled.div`
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  color: #444444;
  font-size 16px;
  margin: 8px 0;
`;

const Home: FunctionComponent = () => (
  <Container>
    <Text>This is the home page.</Text>
    <Text>It may include whatever is needed from the homepage.</Text>
  </Container>
);

export default Home;

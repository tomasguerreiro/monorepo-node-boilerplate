import { StatusBar } from "expo-status-bar";
import { Container, Title } from "./home-styled";

export default function Home() {
  return (
    <Container>
      <Title>Start with monorepo</Title>
      <StatusBar style="auto" />
    </Container>
  );
}

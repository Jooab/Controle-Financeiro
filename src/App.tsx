import "./App.css";
import GlobalStyle from "./globalStyle";
import Header from "./components/header";
import Card from "./components/card";
import { EntryExitProvider } from "./contexts/entry-exit-context";

function App() {
  return (
    <>
      <EntryExitProvider>
        <Header />
        <Card />
        <GlobalStyle />
      </EntryExitProvider>
    </>
  );
}

export default App;

import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;

import "./styles.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Home";
import About from "./components/about/About";
import Treino from "./components/treinos/Treino";
import Planos from "./components/planos/Planos";
import Contact from "./components/contact/Contact";




export default function App() {
  return (

    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Treino />
      <Planos />
      <Contact />
    </div>

  );
}

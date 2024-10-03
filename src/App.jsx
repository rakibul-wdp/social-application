import "./App.css";
import Cards from "./components/Cards";
import ContentHeader from "./components/ContentHeader";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContentHeader />
      <Cards />
    </div>
  );
}

export default App;

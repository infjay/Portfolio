import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { divide } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;

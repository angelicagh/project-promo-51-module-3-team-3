import "./styles/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";

function App() {
  const [projectData, setProjectData] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    description: "",
    author: "",
    job: "",
    photo: "",
    image: "",
  });

  return (
    <>
      <Routes>
        <Route></Route>
      </Routes>

      <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default App;

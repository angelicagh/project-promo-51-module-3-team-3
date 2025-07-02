import "./styles/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import { useState } from "react";
import ProjectPreview from "./components/ProjectPreview";

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
      <ProjectPreview data={projectData} />
      <Footer></Footer>
    </>
  );
}

export default App;

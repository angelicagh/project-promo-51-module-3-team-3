import "./styles/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProjectPreview from "./components/ProjectPreview";
import Form from "./components/Form";
import defaultImage from "./images/house.jpg";
import defaultPhoto from "./images/avatar.webp";
import LandingPage from "./components/Landing";
import ProjectList from "./components/ProjectList";

function App() {
  localStorage.getItem("projectData");
  const localStorageData = localStorage.getItem("projectData");
  let dataFinal = {
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    description: "",
    author: "",
    job: "",
    photo: defaultPhoto,
    image: defaultImage,
  };

  if (localStorageData !== null) {
    const parsedData = JSON.parse(localStorageData);
    dataFinal = parsedData;
    // const [projectData, setProjectData] = useState(parsedData);
  }
  const [projectData, setProjectData] = useState(dataFinal);

  /* 
  const [avatar, setAvatar] = useState("")
  const updateAvatar = (avatar) => {
    console.log("nuevo avatar", avatar)
    setAvatar(avatar);
  }
 */

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/app"
          element={
            <>
              <Header />
              <div className="container_app" style={{ display: "flex" }}>
                <ProjectPreview data={projectData} />
                <Form
                  pprojectData={projectData}
                  psetProjectData={setProjectData}
                />
              </div>
            </>
          }
        />
        <Route path="/project/list" element={<ProjectList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

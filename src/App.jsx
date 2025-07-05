import "./styles/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import { useState } from "react";
import ProjectPreview from "./components/ProjectPreview";
import Form from "./components/Form";


function App() {
  const [projectData, setProjectData] = useState( {
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

  const [avatar, setAvatar] = useState("")
  const updateAvatar = (avatar) => {
    console.log("nuevo avatar", avatar)
    setAvatar(avatar);
  }


  
  

  return (
    <>
      {/* <Routes>
        <Route></Route>
      </Routes> */}

      <Header></Header>
      <ProjectPreview data={projectData} />
      <Form pprojectData={projectData} psetProjectData={setProjectData} pavatar={avatar} pupdateAvatar={updateAvatar} />
      <Footer></Footer>

      
      {/* <Profile avatar={avatar} /> */}
    </>
  );
  }



export default App

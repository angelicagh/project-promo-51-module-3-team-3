import "./styles/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import { useState } from "react";
import ProjectPreview from "./components/ProjectPreview";
import Form from "./components/Form";
import defaultImage from "./images/ebook-example.jpg";
import defaultPhoto from "./images/avatar.webp";

function App() {
  localStorage.getItem("projectData") 
  const localStorageData = localStorage.getItem("projectData");
  let dataFinal = {
    name: "Elegant Workspace",
    slogan: "Diseños Exclusivos",
    repo: "#",
    demo: "#",
    technologies: "React JS - HTML - CSS",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione",
    author: "Emmelie Bjôrklund",
    job: "Full stack Developer",
    photo: defaultPhoto,
    image: defaultImage,
  }

  if (localStorageData !== null) {
    const parsedData = JSON.parse(localStorageData);
    dataFinal =parsedData;
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
      {/* <Routes>
        <Route></Route>
      </Routes> */}

      <Header></Header>
      <ProjectPreview data={projectData} />
      <Form
        pprojectData={projectData}
        psetProjectData={
          setProjectData
        } /* pavatar={avatar} pupdateAvatar={updateAvatar} */
      />
      <Footer></Footer>

      {/* <Profile avatar={avatar} /> */}
    </>
  );
}

export default App;

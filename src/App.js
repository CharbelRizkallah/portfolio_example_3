import { useEffect, useState } from "react";
import { client } from "./client.js";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";


function App() {
  const [profile, setProfile] = useState(null);
  const [work, setWork] = useState(null);
  const [education, setEducation] = useState(null);
  const [experience, setExperience] = useState(null);

  useEffect(() => {
      client.fetch(`*[_type == "profile"]`).then((profile) => setProfile(profile));
      client.fetch(`*[_type == "work"]`).then((work) => setWork(work));
      client.fetch(`*[_type == "education"]`).then((education) => setEducation(education));
      client.fetch(`*[_type == "experience"]`).then((experience) => setExperience(experience));
  },[])


  return (
    <div className="">
      {profile?.map((prof, index) => index === 0 ? 
      <div  key={index}>
      <Header profile={prof} work={work} />
      <About profile={prof} />
      <Education education={education} />
      <Experience experience={experience} />
      <Projects work={work} />
      <Contact profile={prof} />
      </div>
       : '')}

    </div>
  );
}

export default App;

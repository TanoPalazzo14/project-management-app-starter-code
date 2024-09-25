import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard"; // used to render each Project
import { useState , useEffect } from "react";
import axios from "axios";

function ProjectListPage() {
  
  const [ allProjects , setAllProjects ] = useState(null)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/projects`)
    .then((response) => {
      setAllProjects(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])

  return (
    <div className="ProjectListPage">

      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>     

      {/* ... list of all projects should be rendered here   */}
      {/* ... for each project, we should render one ProjectCard */}

      {allProjects === null ? <h3>...loading</h3> : (
        allProjects.map((project) => {
          return(
            <ProjectCard key={project.id} {...project} />
          )
        })
      )}
      
    </div>
  );
}

export default ProjectListPage;
import { useEffect, useState } from "react";
import ProjectsDetails from "./ProjectsDeatils/ProjectsDetails";

const Projects = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, []);

    return (
        <div className="" id="project">
            <div className=" md:grid grid-cols-3 gap-3 mx-auto my-5">
                {
                    project.map(item => <ProjectsDetails key={item.id} item={item}></ProjectsDetails>)
                }
            </div>
        </div>
    );
};

export default Projects;

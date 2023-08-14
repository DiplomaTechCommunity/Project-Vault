import Projects from './Projects'
import ProjectData from './ProjectData';
import "./Projects.css";
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "./Show.css";

const Show = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const keys = ['project_name', 'description', 'tech_stack'];

  const filteredProjects = ProjectData.filter((item) =>
    keys.some((key) =>
      Array.isArray(item[key]) &&
      item[key].some((data) => data.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  );

  return (
    <div className='tut-container'>
      <div className='tut-heading' >
        <h3>Project Vault</h3>
        <p>Sharing knowledge today, inspiring creators tomorrow. 🌟</p>
      </div>
      <div className='description'>
        <p>Welcome to the DTC Project Vault, a dynamic platform dedicated to sharing your projects and sparking innovation. Here, we believe that knowledge shared is innovation multiplied. Join our community in inspiring and learning from diverse projects, as we collaboratively shape a future driven by creativity and technological prowess</p>
      </div>

      {/* Search Bar */}
      <div className='search-bar'>
        <div className='input-wrapper'>
          <FaSearch id="search-icon" />
          <input
            type='text'
            id='searchInput'
            placeholder='search...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className='project-container'>
        {filteredProjects.map((project) => (
          <Projects
            key={project.id}
            imgsrc={project.imgsrc}
            type={project.type}
            year={project.year}
            project_name={project.project_name}
            tech_stack={project.tech_stack}
            description={project.description}
            link={project.link}
            majorProject={project.majorProject}
          />
        ))}
      </div>
    </div>
  )
}

export default Show;

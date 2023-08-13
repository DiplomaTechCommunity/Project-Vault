import Projects from './Projects'
import ProjectData from './ProjectData';
import "./Projects.css";
import { useState } from 'react';

const Show = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredProjects = ProjectData.filter(project => project.project_name.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <div className='tut-container'>
      <div className='tut-heading' >
        <h3>Project Vault</h3>
        <p>Sharing knowledge today, inspiring creators tomorrow. 🌟</p>
      </div>
      <div className='description'>
        <p>Welcome to the DTC Project Vault, a dynamic platform dedicated to sharing your projects and sparking innovation. Here, we believe that knowledge shared is innovation multiplied. Join our community in inspiring and learning from diverse projects, as we collaboratively shape a future driven by creativity and technological prowess</p>
      </div>

      <div className='search-bar'>
        <input
          type='text'
          id='searchInput'
          placeholder='search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className='project-container'>
        {filteredProjects.map(project => {
          return (<Projects
            key={project.id}
            imgsrc={project.imgsrc}
            type={project.type}
            year={project.year}
            project_name={project.project_name}
            tech_stack={project.tech_stack}
            description={project.description}
            link={project.link}
            majorProject={project.majorProject}
          />)
        })}
        {/* {ProjectData.map((val, ind) => {
          return (<Projects
            key={ind}
            imgsrc={val.imgsrc}
            type={val.type}
            year={val.year}
            project_name={val.project_name}
            tech_stack={val.tech_stack}
            description={val.description}
            link={val.link}
            majorProject={val.majorProject}
          />)
        })} */}
      </div>
    </div>
  )
}

export default Show;

/* eslint-disable react/prop-types */


import "./Projects.css";



const Projects = (props) => {

  return (
    <div className='tut-card'>
    <div className="diagonal badge pink">{props.type}</div>
      <h2 className='tut-title'>{props.project_name}</h2>
      <div className="tagContainer">
      <p className="pill2">{props.year}</p>
      {(props.majorProject) &&
      <p className="pill2">Major Project</p>
      }
      </div>
      <img src={props.imgsrc} width="300px" height="190px" alt="image-github repo" />
      <span className="tech">
        {props.tech_stack.map((tech, index) => (
          <p key={index} className="pill">
            {tech}
          </p>
        ))}
      </span>
      <div className='tut-details'>
        <p>{props.description}</p>
        <div className='tut-btn'>
          <a href={props.link}>Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

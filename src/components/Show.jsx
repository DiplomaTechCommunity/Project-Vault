
import Projects from './Projects'
import ProjectData from './ProjectData';
import "./Projects.css";

const Show = () => {
  return (
    <div className='tut-container'>
        <h3 className='tut-heading'>Tutorial</h3>
        <div className='project-container'>
           {ProjectData.map((val,ind)=>{
            return(<Projects 
                key={ind}
                imgsrc={val.imgsrc}
                type={val.type}
                project_name={val.project_name}
                tech_stack={val.tech_stack}
                description={val.description}
                link={val.link}
            />)
           } )}
        </div>
    </div>
  )
}

export default Show;
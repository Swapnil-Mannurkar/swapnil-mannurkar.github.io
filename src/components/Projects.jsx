import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import ProjectData from './ProjectData.json'

const Projects = () => {
    return (
        <div className='ProCont'>
            <h1 className='ExpHeader'>PROJECTS</h1>
            <h2 className='ExpSubHeader'>As a Developer</h2>
            <div className='ProContent'>
                {ProjectData.map((pro, index) => (
                    <ProjectCard key={index} title={pro.title} desc={pro.desc} link={pro.link} />
                ))}
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>for more project please<a href='' style={{ textDecoration: 'none', color: 'lightblue' }}>click here...</a></div>
            </div>
        </div>
    )
}

export default Projects
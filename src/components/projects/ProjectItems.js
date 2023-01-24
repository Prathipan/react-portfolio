import React from 'react'
import "./project.css"

const ProjectItems = ({item}) => {
  return (
    <div className='work-card' key={item.id}>
      <img src={item.image} alt={item.title} className="work-img" />
      <h3 className='work-title'>{item.title}</h3>
      <h4>{item.category}</h4>
      <a href={item.link} className='work-button' target="_blank">Demo<i className="uil uil-arrow-right work-button-icon"></i> </a>
    </div>
  )
}

export default ProjectItems
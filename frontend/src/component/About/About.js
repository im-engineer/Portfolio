import React from 'react'
import './About.css'
import { aboutData } from '../../Data/aboutData'
import img from '../../Data/image/MicrosoftTeams-image (1).png'

function About() {
  return (
    <div className='about'>
            <div className="line-styling">
              <div className="style-circle" ></div>
              <div className="style-circle" ></div>
              <div className="style-line" ></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color:  "#EA738DFF"}}>{aboutData.title}</h2>
                    <p>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                  <div className='style-circle'></div>
                  <div className='style-circle'></div>

                <img 
                        src={img}  
                        alt="" 
                    />

                <div className='style-circle'></div>
                <div className='style-circle'></div>
                </div>
                

            </div>
    </div>
  )
}

export default About
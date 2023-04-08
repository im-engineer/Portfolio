import React  from 'react';
import Fade from 'react-reveal/Fade';
import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear}) {


    return (
        <Fade bottom>
            <div key={id} className="experience-card" style={{backgroundColor:"#EA738DFF"}}>
                <div className="expcard-img" style={{backgroundColor: "#89ABE3FF" }}>
                    <img src={expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: "#ffff"}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: "#ffff"}}>{jobtitle}</h4>
                    <h5 style={{color: "#ffff"}}>{company}</h5>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard

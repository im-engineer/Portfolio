import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import  projectsData from "../../Data/projectData"
import { HiArrowRight } from "react-icons/hi";

import './Project.css'
import SingleProject from './SingleProject/SingleProject';

function Project() {

    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: "white", 
            backgroundColor: '#3fc337',
            transition: 'color 0.2s',
            "&:hover": {
                color: '#EAEAEA', 
                backgroundColor: '#3fc337',
            }
        },
        viewArr : {
            color: "#fff", 
            backgroundColor: '#EAEAEAb3',
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: "#ffff", 
                backgroundColor: '#212121',
            }
        },
    }));

    const classes = useStyles();

  return (
    <>
        {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: '#89ABE3FF'}}>
                    <div className="projects--header">
                        <h1 style={{color: "#EA738DFF"}}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0,3).map(project => (
                                <SingleProject
                                    // theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div> 
                        {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                         )}
                    </div>
                </div>
            )}
 
    </>
  )
}

export default Project

import React, { useState, useEffect } from "react";
import "./Landing.css";
import socialsData from "../../Data/socialData";
import resume from "../../assets/resume/ssrresume.pdf"
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const developers = [
    "MEARN FULL STACK DEVELOPER",
    "React Developer",
    "Angular Developer",
    "Node Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === developers.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 2000ms (2 seconds) delay before updating the text

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, developers.length]);
  return (
    <>
      <div className="landing">
        <div className="one">
          <h1>Siddhant</h1>
        </div>
        <div className="two">
          <h3>
            <i class="fa-solid fa-code"></i> Web Developer{" "}
            <i class="fa-solid fa-code"></i>
            <br />
            This is Siddhant Singh <i class="fa-solid fa-user-secret"></i>
            <br />
            {developers[currentIndex]}<br/>
            <a href={resume} download>
            <button className="resumeBtn">Download Resume</button>
          </a>
          </h3>
          
        </div>
        <div className="three">
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: "#89ABE3FF" }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: "#89ABE3FF" }}
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing--social"
                  style={{ color: "#89ABE3FF" }}
                  aria-label="Twitter"
                />
              </a>
            )}
            {socialsData.instagram && (
              <a href={socialsData.instagram} target="_blank" rel="noreferrer">
                <FaInstagram
                  className="landing--social"
                  style={{ color: "#89ABE3FF" }}
                  aria-label="Instagram"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

import React from "react";
import "./Landing.css";
import socialsData from "../../Data/socialData";
// import headerData from "../../Data/headerData"
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";



function Landing() {
  return (
    <>
    <div className="landing" >
        <div className="one"><h1>Siddhant</h1></div>
        <div className="two">
          <h3>Web Developer<br/>This is Siddhant Singh<br/>MEARN FULL STACK DEVELOPER</h3>
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
          {socialsData.youtube && (
            <a href={socialsData.youtube} target="_blank" rel="noreferrer">
              <FaYoutube
                className="landing--social"
                style={{ color: "#89ABE3FF" }}
                aria-label="YouTube"
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

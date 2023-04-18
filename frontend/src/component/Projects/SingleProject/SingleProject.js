import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

export default function SingleProject({
  id,
  name,
  desc,
  tags,
  code,
  demo,
  image,
})
 {
  // const useStyles = makeStyles((t) => ({
  //   iconBtn: {
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     width: 40,
  //     height: 40,
  //     borderRadius: 50,
  //     border: `2px solid #212121`,
  //     color: "#212121",
  //     transition: "all 0.2s",
  //     "&:hover": {
  //       backgroundColor: "#EAEAEA",
  //       color: "#3fc337",
  //       transform: "scale(1.1)",
  //       border: `2px solid '#EAEAEA'`,
  //     },
  //   },
  //   icon: {
  //     fontSize: "1.1rem",
  //     transition: "all 0.2s",
  //     "&:hover": {},
  //   },
  // }));

  // const classes = useStyles();
  // function getNameFromSomewhere(){
  //     return 'LowerCase';
  // }

  // name = getNameFromSomewhere();
  // name = name ?? '';

  return (
    <>
      <Fade bottom>
        <div
          key={id}
          className="singleProject"
          style={{ backgroundColor: "#EA738DFF" }}
        >
          <div className="projectContent">
            <h2
              id={name.replace(" ", "-").toLowerCase()}
              style={{ color: "#89ABE3FF" }}
            >
              {name}
            </h2>
            <img src={image ? image : placeholder} alt={name} />
            <div className="project--showcaseBtn">
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="iconBtn"
                aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                  .replace(" ", "-")
                  .toLowerCase()}-demo`}
              >
                <FaPlay
                  id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                  className="icon"
                  aria-label="Demo"
                />
              </a>
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className="iconBtn"
                aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                  .replace(" ", "-")
                  .toLowerCase()}-code`}
              >
                <FaCode
                  id={`${name.replace(" ", "-").toLowerCase()}-code`}
                  className="icon"
                  aria-label="Code"
                />
              </a>
            </div>
          </div>
          <p
            className="project--desc"
            style={{
              background: "#89ABE3FF",
              color: "#212121",
            }}
          >
            {desc}
          </p>
          <>
            {" "}
            <div
              className="project--lang"
              style={{
                background: "#89ABE3FF",
                color: "#212121",
              }}
            >
              <>
                {Array.isArray(tags) &&
                  tags.map((tag, id) => <span key={id}>{tag}</span>)}
              </>
            </div>
          </>
        </div>
      </Fade>
    </>
  );
}

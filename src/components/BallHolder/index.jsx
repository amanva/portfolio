import React from "react";
// import {
//     faJava,
//     faCss3,
//     faHtml5,
//     faJs,
//     faReact,
//   } from '@fortawesome/free-brands-svg-icons'
import html from "../../assets/images/html.png"
import css from "../../assets/images/css.png"
import javascript from "../../assets/images/javascript.png"
import reactjs from "../../assets/images/reactjs.png"
import java from "../../assets/images/Java.png"
import BallCanvas from "../Balls";
import './index.scss'

const BallHolder = () => {
    const technologies = [
        {
          name: "Java",
          icon: java,
        },
        {
          name: "css",
          icon: css,
        },
        {
          name: "Html",
          icon: html,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
        {
          name: "React",
          icon: reactjs,
        },
      ];
  return (
    <div className='ballContain'>
      {technologies.map((technology) => (
        <div className='ind' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default BallHolder
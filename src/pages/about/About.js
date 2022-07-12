import React from 'react'
import { AboutContainer } from './Style'
import coding from "../../assets/coding.svg"
const About = () => {
  return (
    <AboutContainer>
      <div>
      <img src={coding} alt="" />
      </div>
      <h1>I'm Özcan 😎</h1>
      <h2>Front End Developer</h2>
      <a href="https://github.com/">CHECK MY GITHUB</a>
    </AboutContainer>
  )
}

export default About
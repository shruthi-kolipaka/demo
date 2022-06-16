import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import pp from '../images/DN.jpeg';
import ico from '../images/first.jpeg';

const ProjectStyle = styled.div`
  background-color: #ef8172;
  color: #fff;
  text-align: center;
  padding: 10% 15%;
  header {
    background-color: white;
    text-align: center;
    padding: 20px;
  }
  img {
    margin: 20%;
  }
`;
export default function Projects() {
  return (
    <div>
      <header>
        <h1>Projects currently working on</h1>
      </header>
      <Carousel>
        <Carousel.Item interval={1000} data="pause">
          <ProjectStyle>
            <img className="d-block w-50" src={pp} alt="kanthi" />
            <p>handloom shop for all types of sarees</p>
            <p>Starting Our Online Service Soon...</p>
          </ProjectStyle>
        </Carousel.Item>
        <Carousel.Item interval={1000} data="pause">
          <ProjectStyle>
            <img className="d-block w-50" src={ico} alt="icon" />
            <p>All Computer Services</p>
            <p>Starting Our Online Service Soon...</p>
          </ProjectStyle>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

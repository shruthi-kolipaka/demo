import { Carousel, Image } from 'react-bootstrap';
import React from 'react';
import Img from 'gatsby-image';
import 'bootstrap/dist/css/bootstrap.min.css';

function SingleProject({ project }) {
  return (
    <div>
      <header>
        <h1>Projects currently working on</h1>
      </header>
      <Carousel>
        <Carousel.Item interval={1000} data="pause">
          <Img
            className="d-block w-50"
            fluid={project.image.asset.fluid}
            alt="kanthi"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000} data="pause">
          <Img
            className="d-block w-50"
            src={project.image.asset.fluid}
            alt="icon"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default function Projects({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <p>
          <Carousel>
            <Carousel.Item interval={1000} data="pause">
              <Img
                className="d-block w-50"
                fluid={project.image.asset.fluid}
                alt="kanthi"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000} data="pause">
              <Img
                className="d-block w-50"
                src={project.image.asset.fluid}
                alt="icon"
              />
            </Carousel.Item>
          </Carousel>
        </p>
      ))}
      ;
    </div>
  );
}

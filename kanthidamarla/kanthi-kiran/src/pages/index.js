import React from 'react';
import styled from 'styled-components';
import pp from '../images/bgrem.png';
import Front from '../styles/Front';

const HomePageStyle = styled.div`
  color: #fff;
  font-family: 'Montserrat-Bold';
  background-color: black;
  text-align: center;
  padding: 10% 15%;
  img {
    border-radius: 100%;
    width: 20%;
  }
  h1 {
    font-size: 200%;
  }
`;
const code = `<>CODE</>`;
export default function Homepage() {
  return (
    <HomePageStyle>
      <div className="row">
        <div className="col-lg-6">
          <h1>THINK</h1>
          <h1>DESIGN</h1>
          <h1>{code}</h1>
          <br />
          <p>Hello My name is Kanthi Kiran, and i'm an graduate from India</p>
          <p>I'm a Designer / Front End Devel❤️per</p>
        </div>
        <div className="col-lg-6">
          <img src={pp} alt="k" />
        </div>
      </div>
      <div className="row">
        <a href="about">
          <p>View More</p>
        </a>
      </div>
    </HomePageStyle>
  );
}

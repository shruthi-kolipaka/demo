import React from 'react';
import styled from 'styled-components';
import pp from '../images/bgrem.png';

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
      <br />
      <div className="row">
        <div className="col-lg-6">
          <h1 id="about">About Me</h1>
          <p>
            Hi. i'm Kanthi you can also call me a product designer, interaction,
            UI, UX or by any other market defined title.{' '}
          </p>
          <br />
          <p>
            I don't like to define myself by the work I've done. I define myself
            by the work I'm going to do. Skills can be taught, personality is
            inherent. I prefer to keep learning continuously and challenge
            myself to do intresting things
          </p>
          <br />
          <p>
            I'm never satisfied to just come up with ideas. Instead I have an
            almost impulsive need to act on them.
          </p>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <p>
            I genuinely care about people, and love helping fellow designers
            work on their craft.
          </p>
          <p>
            I’m a fast learner, able to pick up new skills and juggle different
            projects and roles with relative ease.
          </p>
          <p>
            I like to develop expertise in a number of areas over the course of
            my life and career.
          </p>
          <p>
            Bored about my details.....
            <br />
            Then Look about my Life 😜
          </p>
        </div>
      </div>
    </HomePageStyle>
  );
}

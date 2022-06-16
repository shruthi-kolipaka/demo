import React from 'react';
import Img from 'gatsby-image';
import '../styles/styles.css';

function SingleName({ name }) {
  console.log(name);
  return (
    <div>
      <div className="bb">
        <div className="card">
          <div className="top">
            <h2 className="name">{name.name}</h2>
            <Img className="circle-img" fluid={name.image.asset.fluid} />
          </div>
          <div className="bottom" />
          <p className="info">{name.description}</p>
        </div>
      </div>
    </div>
  );
}
export default function Names({ names }) {
  return (
    <div>
      {names.map((name) => (
        <p>
          <SingleName key={name.id} name={name} />
        </p>
      ))}
    </div>
  );
}

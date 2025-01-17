import React from 'react';

export function IdCard(props) {
  return (
    <div className="idCard">
      <div className="idCardContainer">
        <img
          className="profilePicture"
          src={props.idInformation.picture}
          alt="idPhoto"
        />
        <div>
          <p>
            <b>First Name: </b>
            {props.idInformation.firstName}
          </p>
          <p>
            <b>Last Name: </b>
            {props.idInformation.lastName}
          </p>
          <p>
            <b>Gender: </b>
            {props.idInformation.gender}
          </p>
          <p>
            <b>Height: </b>
            {props.idInformation.height} cm
          </p>
          <p>
            <b>Birth: </b>
            {props.idInformation.birth.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

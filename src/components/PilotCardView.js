import React from 'react';
import PilotsImage from './PilotsImage';

const FormulaPilot = ({
  givenName,
  familyName,
  dateOfBirth,
  nationality,
  constructor,
  constructorWebsite
}) => {
  return (
    <div className="flex-container">
      <div>
        <PilotsImage image={givenName} />
        <h1>{givenName}</h1>
        <h1>{familyName}</h1>
        <h1>{dateOfBirth}</h1>
        <h1>{nationality}</h1>
        <h1>
          <a href={constructorWebsite}>{constructor}</a>
        </h1>
      </div>
    </div>
  );
};

export default FormulaPilot;

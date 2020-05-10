import React from 'react';
import PilotsImage from './PilotsImage';

const FormulaPilot = ({
  position,
  code,
  givenName,
  familyName,
  dateOfBirth,
  nationality,
  constructorName,
  constructorWebsite
}) => {
  return (
    <div className="flex-container">
      <div>
        <PilotsImage image={givenName} />
        <h1>#{position}</h1>
        <h1>
          {givenName} ({code})
        </h1>
        <h1>{familyName}</h1>
        <h1>{dateOfBirth}</h1>
        <h1>{nationality}</h1>
        <h1>
          <a href={constructorWebsite}>{constructorName}</a>
        </h1>
      </div>
    </div>
  );
};

export default FormulaPilot;

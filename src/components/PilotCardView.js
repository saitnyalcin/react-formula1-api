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
        <h2>#{position}</h2>
        <h2>
          {givenName} ({code})
        </h2>
        <h2>{familyName}</h2>
        <h2>{dateOfBirth}</h2>
        <h2>{nationality}</h2>
        <h2>
          <a href={constructorWebsite}>{constructorName}</a>
        </h2>
      </div>
    </div>
  );
};

export default FormulaPilot;

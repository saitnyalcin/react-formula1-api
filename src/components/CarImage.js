import React from 'react';
import Adrian from '../car-images/force-india.png';
import Anthony from '../car-images/super-aguri.png';
import David from '../car-images/red-bull.png';
import Felipe from '../car-images/ferrari.png';
import Fernando from '../car-images/renault.png';
import Giancarlo from '../car-images/force-india.png';
import Heikki from '../car-images/mclaren.png';
import Jarno from '../car-images/toyota.png';
import Jenson from '../car-images/honda.png';
import Kazuki from '../car-images/williams.png';
import Kimi from '../car-images/ferrari.png';
import Lewis from '../car-images/mclaren.png';
import Mark from '../car-images/red-bull.png';
import Default from '../car-images/ferrari.png';
import Nelson from '../car-images/renault.png';
import Nick from '../car-images/bmw.png';
import Nico from '../car-images/williams.png';
import Robert from '../car-images/bmw.png';
import Rubens from '../car-images/honda.png';
import Sebastian from '../car-images/toro-rosso.png';
import Sébastien from '../car-images/toro-rosso.png';
import Takuma from '../car-images/super-aguri.png';
import Timo from '../car-images/toyota.png';

const CarImage = ({ image }) => {
  switch (image) {
    case 'Lewis':
      image = Lewis;
      break;
    case 'Felipe':
      image = Felipe;
      break;
    case 'Adrian':
      image = Adrian;
      break;
    case 'Anthony':
      image = Anthony;
      break;
    case 'David':
      image = David;
      break;
    case 'Fernando':
      image = Fernando;
      break;
    case 'Giancarlo':
      image = Giancarlo;
      break;
    case 'Heikki':
      image = Heikki;
      break;
    case 'Jarno':
      image = Jarno;
      break;
    case 'Jenson':
      image = Jenson;
      break;
    case 'Kazuki':
      image = Kazuki;
      break;
    case 'Kimi':
      image = Kimi;
      break;
    case 'Mark':
      image = Mark;
      break;
    case 'Nelson':
      image = Nelson;
      break;
    case 'Nick':
      image = Nick;
      break;
    case 'Nico':
      image = Nico;
      break;
    case 'Robert':
      image = Robert;
      break;
    case 'Rubens':
      image = Rubens;
      break;
    case 'Sebastian':
      image = Sebastian;
      break;
    case 'Sébastien':
      image = Sébastien;
      break;
    case 'Takuma':
      image = Takuma;
      break;
    case 'Timo':
      image = Timo;
      break;

    default:
      image = Default;
      break;
  }

  return (
    <div className="car-image">
      <img src={image} alt="pilotImage" />
    </div>
  );
};

export default CarImage;

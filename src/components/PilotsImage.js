import React from 'react';
import Adrian from '../pilot-images/adrian-sutil.jpg';
import Anthony from '../pilot-images/anthony-davidson.jpeg';
import David from '../pilot-images/david-coulthard.jpg';
import Felipe from '../pilot-images/felipe-massa.jpg';
import Fernando from '../pilot-images/fernando-alonso.jpg';
import Giancarlo from '../pilot-images/giancarlo-fisichella.jpg';
import Heikki from '../pilot-images/heikki-kovalainen.jpg';
import Jarno from '../pilot-images/jarno-trulli.jpg';
import Jenson from '../pilot-images/jenson-button.jpg';
import Kazuki from '../pilot-images/kazuki-nakajima.jpg';
import Kimi from '../pilot-images/kimi-raikkonen.jpg';
import Lewis from '../pilot-images/lewis-hamilton.jpg';
import Mark from '../pilot-images/mark-webber.jpg';
import Default from '../pilot-images/michael-schumacher.jpg';
import Nelson from '../pilot-images/nelson-piquet-jr.jpg';
import Nick from '../pilot-images/nick-heidfeld.jpg';
import Nico from '../pilot-images/nico-rosberg.png';
import Robert from '../pilot-images/robert-kubica.jpg';
import Rubens from '../pilot-images/rubens-barrichello.png';
import Sebastian from '../pilot-images/sebastian-vettel.jpg';
import Sébastien from '../pilot-images/sebastien-bourdais.jpg';
import Takuma from '../pilot-images/takuma-sato.jpg';
import Timo from '../pilot-images/timo-glock.jpg';

const PilotsImage = ({ image }) => {
  switch (image) {
    case 'Lewis':
      image = Lewis;
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
    case 'Felipe':
      image = Felipe;
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
    <div className="pilot-image">
      <img src={image} alt="" />
    </div>
  );
};

export default PilotsImage;

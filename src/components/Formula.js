import React, { useEffect, useState } from 'react';
import PilotCardView from './PilotCardView';

export default function Formula() {
  const [data, setData] = useState([]);

  // set the api call function using the fetch data library to sethe data
  async function fetchData() {
    const result = await fetch(
      'http://ergast.com/api/f1/2008/driverStandings.json'
    );

    //set the content and parse into the data set using set Data
    result.json().then(result => setData(result));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {Object.keys(data).map(item => (
        <div key={item}>
          {data.MRData.StandingsTable.StandingsLists.map(formula => (
            <div key={formula} className="flex-container">
              {formula.DriverStandings.map(standing => (
                <div key={standing.Driver.driverId}>
                  {standing.Constructors.map(constructor => (
                    <PilotCardView
                      key={standing.Driver.driverId}
                      position={standing.position}
                      code={standing.Driver.code}
                      givenName={standing.Driver.givenName}
                      familyName={standing.Driver.familyName}
                      dateOfBirth={standing.Driver.dateOfBirth}
                      nationality={standing.Driver.nationality}
                      constructorName={constructor.name}
                      constructorWebsite={constructor.url}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

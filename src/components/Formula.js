import React, { useEffect, useState } from 'react';
import PilotCardView from './PilotCardView';

export default function Formula() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await fetch(
      'http://ergast.com/api/f1/2008/driverStandings.json'
    );

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
                      givenName={standing.Driver.givenName}
                      familyName={standing.Driver.familyName}
                      dateOfBirth={standing.Driver.dateOfBirth}
                      nationality={standing.Driver.nationality}
                      constructor={constructor.name}
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

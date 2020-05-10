import React, { useEffect, useState } from 'react';
import FormulaPilot from './FormulaPilot';

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
                    <FormulaPilot
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

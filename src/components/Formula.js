import React, { useEffect, useState } from 'react';
import FormulaPilot from './FormulaPilot';

export default function History() {
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
          <div className="container">
            {data.MRData.StandingsTable.StandingsLists.map(formula => (
              <div>
                <h1>Season: {formula.season}</h1>
                {formula.DriverStandings.map(standing => (
                  <div>
                    {
                      <div key={standing.Driver.driverId}>
                        <div>
                          <FormulaPilot name={standing.Driver.givenName} />
                        </div>
                      </div>
                    }
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import DataService from "./api/DataService";

function App() {
  const [apiData, setApiData] = useState(null);

  function apiGet() {
    DataService.get("datasets")
      .then((response) => {
        console.log('Raw API Response:', response);
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <div>
      <h1>Data Service</h1>
      <button onClick={apiGet}>Load Data</button>

      {apiData && (
        <div>
          <h2>Data from NOAA API:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

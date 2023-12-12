import React, { useState, useEffect } from "react";
import DataService from "./api/DataService";

function App() {
  const [apiData, setApiData] = useState({ results: [] });

  function apiGet() {
    DataService.get("datasets")
      .then((response) => {
        console.log("Full API Response:", response);
        console.log("API Data Structure", Object.keys(response.data || {}));
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <h1>Data Service</h1>
      <button onClick={apiGet}>Load Data</button>

      {apiData.results && (
        <div>
          <h2>Datasets:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import DataService from "./api/DataService";

function App() {
  const [apiData, setApiData] = useState(null);

  function apiGet() {
    DataService.get("datasets")
      .then((response) => {
        console.log("Full API Response:", response);
        console.log("API Data Structure:", response.data);
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
          <h2>Datasets:</h2>
          <ul>
            {Object.entries(apiData).map(([key, dataset]) => (
              <li key={key}>
                <strong>Name:</strong> {dataset.name},
                <strong>ID:</strong> {dataset.id},
                <strong>Coverage:</strong> {dataset.datacoverage}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

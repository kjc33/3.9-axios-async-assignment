import React, { useState, useEffect } from "react";
import DataService from "./api/DataService";

function App() {
  const [apiData, setApiData] = useState([]);

  function apiGet() {
    DataService.get("datasets")
      .then((response) => {
        console.log("Full API Response:", response);
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

      {apiData.results && (
        <pre>
          <h2>Datasets:</h2>
            {apiData.results.map((dataset) => (
              <div key={dataset.id}>
                <strong>Name:</strong> {dataset.name},
                <strong>ID:</strong> {dataset.id},
                <strong>Coverage:</strong> {dataset.datacoverage}
              </div>
            ))}
        </pre>
      )}
    </div>
  );
}

export default App;

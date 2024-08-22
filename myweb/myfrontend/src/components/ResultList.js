import React, { useEffect, useState } from 'react';
import { getResults } from '../api';
import '../App.css'; 

const ResultList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getResults();
        setResults(data);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="list-container">
      <h2>EPL Results</h2>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            {result.date} - {result.home_team} {result.home_score} - {result.away_team} {result.away_score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;

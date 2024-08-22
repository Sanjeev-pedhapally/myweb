import React, { useState } from 'react';
import { createResult } from '../api';
import '../App.css'; 

const ResultForm = () => {
  const [date, setDate] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newResult = {
      date,
      home_team: homeTeam,
      away_team: awayTeam,
      home_score: parseInt(homeScore),
      away_score: parseInt(awayScore),
    };

    try {
      await createResult(newResult);
      alert('Result added successfully');
      setDate('');
      setHomeTeam('');
      setAwayTeam('');
      setHomeScore('');
      setAwayScore('');
    } catch (error) {
      console.error('Error creating result:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add EPL Result</h2>
      <form onSubmit={handleSubmit}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required placeholder="Date" />
        <input type="text" value={homeTeam} onChange={(e) => setHomeTeam(e.target.value)} required placeholder="Home Team" />
        <input type="text" value={awayTeam} onChange={(e) => setAwayTeam(e.target.value)} required placeholder="Away Team" />
        <input type="number" value={homeScore} onChange={(e) => setHomeScore(e.target.value)} required placeholder="Home Score" />
        <input type="number" value={awayScore} onChange={(e) => setAwayScore(e.target.value)} required placeholder="Away Score" />
        <button type="submit">Add Result</button>
      </form>
    </div>
  );
};

export default ResultForm;

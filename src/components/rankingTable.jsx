import React, { useState, useEffect } from 'react';

const RankingTable = ({ data }) => {
  // Create state to store sorted data and current rankings
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    // Sort the data based on user scores in descending order
    const sorted = [...data].sort((a, b) => b.score - a.score);

    // Calculate the rankings and number of steps moved
    const newRankings = sorted.map((item, index) => {
      const previousIndex = data.findIndex((d) => d.id === item.id);
      const diff = previousIndex - index;
      return {
        ...item,
        rank: index + 1,
        diff,
      };
    });
    setRankings(newRankings);
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Score</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {rankings.map((item) => (
          <tr key={item.id}>
            <td>{item.rank}</td>
            <td>{item.name}</td>
            <td>{item.score}</td>
            <td>{item.diff}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RankingTable;

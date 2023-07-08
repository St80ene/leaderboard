const RankingTable = ({ previousLog, currentLog }) => {
  const sortedAgents = [...currentLog].sort((a, b) => b.score - a.score);

  // create an object to map agent IDs to their previous ranking
  const previousRankings = {};
  previousLog.forEach((agent, index) => {
    previousRankings[agent.agent_id] = index + 1;
  });

  console.log('here');

  return (
    <div>
      <h1>Agent Ranking</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Agent</th>
            <th>Previous Rank</th>
            <th>Score</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {sortedAgents.map((agent, index) => {
            const previousRank = previousRankings[agent.agent_id];
            const change = previousRank ? previousRank - (index + 1) : '-';
            return (
              <tr key={agent.agent_id}>
                <td>{index + 1}</td>
                <td>{agent.first_name}</td>
                <td>{previousRank || '-'}</td>
                <td>{agent.score}</td>
                <td>{change}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;

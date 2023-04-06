import './App.css';
import RankingTable from './components/rankingTable';

const previousLog = [
  {
    agent_id: 'f31b1562-2a9e-4502-af13-315978680498',
    first_name: 'Charles',
    score: '249',
  },
  {
    agent_id: '50b4d6b3-c1c2-40eb-ac1f-905a4d5a490a',
    first_name: 'James',
    score: '133',
  },
  {
    agent_id: 'b684f610-8966-461e-b8cd-2893076ed625',
    first_name: 'Michael',
    score: '93',
  },
  {
    agent_id: '0bf892e3-9ec4-4056-96c3-64253ef9d83b',
    first_name: 'Ahmed',
    score: '7',
  },
  {
    agent_id: 'fdd35ef9-a7f8-4c95-a34c-91ad1674e60f',
    first_name: 'Patrick',
    score: '7',
  },
  {
    agent_id: '0c15f914-3d7d-44c3-ae3a-013d31770558',
    first_name: 'Salam',
    score: '5',
  },
  {
    agent_id: '7252a95c-88eb-499b-a78f-834bc5c4ec28',
    first_name: 'Chiamaka',
    score: '3',
  },
  {
    agent_id: 'c54c4b1e-2535-4628-8e9f-fc2eba7a11d7',
    first_name: 'Etiene',
    score: '1',
  },
  {
    agent_id: 'ea001ec3-f609-4018-8b6b-9c84331abc01',
    first_name: 'Sadiq',
    score: '1',
  },
  {
    agent_id: '6c6aa220-b9a1-4f5a-9ed2-06f4177beb7e',
    first_name: 'Tersoo',
    score: '0',
  },
];

const currentLog = [
  {
    agent_id: 'f31b1562-2a9e-4502-af13-315978680498',
    first_name: 'Charles',
    score: '1',
  },
  {
    agent_id: '50b4d6b3-c1c2-40eb-ac1f-905a4d5a490a',
    first_name: 'James',
    score: '133',
  },
  {
    agent_id: 'b684f610-8966-461e-b8cd-2893076ed625',
    first_name: 'Michael',
    score: '93',
  },
  {
    agent_id: '0bf892e3-9ec4-4056-96c3-64253ef9d83b',
    first_name: 'Ahmed',
    score: '7',
  },
  {
    agent_id: 'fdd35ef9-a7f8-4c95-a34c-91ad1674e60f',
    first_name: 'Patrick',
    score: '7',
  },
  {
    agent_id: '0c15f914-3d7d-44c3-ae3a-013d31770558',
    first_name: 'Salam',
    score: '5',
  },
  {
    agent_id: '7252a95c-88eb-499b-a78f-834bc5c4ec28',
    first_name: 'Chiamaka',
    score: '3',
  },
  {
    agent_id: 'c54c4b1e-2535-4628-8e9f-fc2eba7a11d7',
    first_name: 'Etiene',
    score: '10',
  },
  {
    agent_id: 'ea001ec3-f609-4018-8b6b-9c84331abc01',
    first_name: 'Sadiq',
    score: '15',
  },
  {
    agent_id: '6c6aa220-b9a1-4f5a-9ed2-06f4177beb7e',
    first_name: 'Tersoo',
    score: '0',
  },
];

function App() {
  return (
    <div className='App'>
      {/* <RankingTable data={users} /> */}
      <RankingTable previousLog={previousLog} currentLog={currentLog} />
    </div>
  );
}

export default App;

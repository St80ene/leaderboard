import './App.css';
import RankingTable from './components/rankingTable';

const users = [
  { id: 1, name: 'Etiene', score: 23 },
  { id: 2, name: 'Kelechi', score: 45 },
  { id: 3, name: 'Ighalo', score: 54 },
  { id: 4, name: 'Kelechi', score: 5 },
  { id: 5, name: 'James', score: 10 },
  { id: 6, name: 'Herbert', score: 9 },
];

function App() {
  return (
    <div className='App'>
      <RankingTable data={users} />
    </div>
  );
}

export default App;

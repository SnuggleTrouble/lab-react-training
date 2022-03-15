import './App.css';
import { IdCard } from './components/IdCard/IdCard';

const idCards = [
  {
    lastName: 'Plotter',
    firstName: 'Harry',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Gronger',
    firstName: 'Hermione',
    gender: 'female',
    height: 172,
    birth: new Date('1992-03-14'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function App() {
  return (
    <div className="App">
      {idCards.map((idCard) => {
        return <IdCard idInformation={idCard} />;
      })}
    </div>
  );
}

export default App;

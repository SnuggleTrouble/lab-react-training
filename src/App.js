import './App.css';
import { IdCard } from './components/IdCard/IdCard';
import { Greetings } from './components/Greetings/Greetings';
import { Random } from './components/Random/Random';

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
      <h1>IdCard</h1>
      {idCards.map((idCard) => {
        return <IdCard idInformation={idCard} />;
      })}
      <h1>Greetings</h1>
      <Greetings lang="de">Harry</Greetings>
      <Greetings lang="fr">Hermione</Greetings>
      <Greetings lang="es">Ronald</Greetings>
      <Greetings lang="en">Hagrid</Greetings>
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
  );
}

export default App;

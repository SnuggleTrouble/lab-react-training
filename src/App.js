import './App.css';
import { IdCard } from './components/IdCard/IdCard';
import { Greetings } from './components/Greetings/Greetings';
import { Random } from './components/Random/Random';
import { BoxColor } from './components/BoxColor/BoxColor';
import { CreditCard } from './components/CreditCard/CreditCard';

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
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>BoxColor</h1>
      <BoxColor r={21} g={212} b={145} />
      <BoxColor r={212} g={21} b={135} />
      <h1>CreditCard</h1>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={3}
        expirationYear={2025}
        bank="DNB"
        owner="Snuggle Trouble"
        bgColor="#ddbb55"
        color="white"
      />
    </div>
  );
}

export default App;

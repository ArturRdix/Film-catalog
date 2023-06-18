import React, { useState } from 'react';
import Car from './Components/Car';

const App = () => {
  const [carList, setCarList] = useState([
    {
      car: 'Audi'
    },
    {
      car: 'BMW'
    },
    {
      car: 'Porsche'
    }
  ]);

  const [tmpValue, setTmpValue] = useState('')

  const pushCar = (value) => {
    if (value !== '' && value != undefined) {
      setCarList(prevCarList => [...prevCarList, { car: value }]);
    }
  };

  return (
    <div className="App">
      <input onChange={(v) => setTmpValue(v.target.value)} type="text" />
      <button onClick={() => pushCar(tmpValue)}>Добавить</button>
      {carList.map((e) => (
        <Car key={e.car} name={e.car} />
      ))}
    </div>
  );
};

export default App;

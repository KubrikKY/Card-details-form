import './App.css';

import Window from './component/Window/Window';
import Card from './component/Card/Card';
import FormCard from './component/FormCard/FormCard';
import Finish from './component/Finish/Finish';

import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const defaultData = {
    name: 'Jane Appleseed',
    numberCard: '0000 0000 0000 0000',
    year: '00',
    month: '00',
    CVC: '000',
  };
  const [finish, setFinish] = useState(false);

  const data = useSelector((state) => Object.assign({}, state.card));

  const onSubmit = (e) => {
    e.preventDefault();
    delete data.validate;
    setFinish(true);
    console.log(JSON.stringify(data));
  };
  return (
    <div className="App">
      <Window>
        <Card placeholder={defaultData} />
        {!finish ? (
          <FormCard placeholder={defaultData} onSubmit={onSubmit} />
        ) : (
          <Finish continue={setFinish} />
        )}
      </Window>
    </div>
  );
}

export default App;

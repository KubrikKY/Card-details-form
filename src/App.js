import './App.css';

import Window from './component/Window/Window';
import Card from './component/Card/Card';
import FormCard from './component/FormCard/FormCard';

import { useSelector } from 'react-redux';

function App() {
  const defaultData = {
    name: 'Jane Appleseed',
    numberCard: '0000 0000 0000 0000',
    year: '00',
    month: '00',
    CVC: '000',
  };

  const data = useSelector((state) => state.card);
  const dateNow = new Date();
  const yearNow = +String(dateNow.getFullYear()).slice(2);

  const onSubmit = (e) => {
    const { name, numberCard, year, month, CVC } = data;
    console.log(dateNow.getMonth() + 1 < month);
    console.log('year', yearNow === +year);

    e.preventDefault();
    if (name.split(' ').length !== 2) {
      console.log('non valid name');
      return;
    }
    if (numberCard.length !== 19) {
      console.log('non valid numberCard');
      return;
    }
    if (yearNow > year) {
      console.log('non valid year');
      return;
    }
    if (month === '0') {
      console.log('non valid month');
      return;
    }
    if (CVC.length !== 3) {
      console.log('non valid CVC');
      return;
    }
    console.log(JSON.stringify(data));
  };
  return (
    <div className="App">
      <Window>
        <Card placeholder={defaultData} />
        <FormCard placeholder={defaultData} onSubmit={onSubmit} />
      </Window>
    </div>
  );
}

export default App;

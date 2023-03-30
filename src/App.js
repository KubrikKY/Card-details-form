import './App.css';

import Window from './component/Window/Window';
import Card from './component/Card/Card';
import FormCard from './component/FormCard/FormCard';

function App() {
  const defaultData = {
    name: 'Jane Appleseed',
    numberCard: '0000 0000 0000 0000',
    year: '00',
    month: '00',
    CVC: '000',
  };
  return (
    <div className="App">
      <Window>
        <Card placeholder={defaultData} />
        <FormCard placeholder={defaultData} />
      </Window>
    </div>
  );
}

export default App;

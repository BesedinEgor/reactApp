import './components/App.scss';
import './components/vars.scss';
import './components/generatingElements/generatingElements.scss';
import './components/main/Main.scss';
import './components/state/state.scss'
import './components/statesSquares/statesSquares.scss'

import Main from './components/main/Main';

const OBJECTS = [
  {
    color: '#FBCEB1',
    value: 4.1,
  },
  {
    color: '#B5B8B1',
    value: 'Method',
  },
  {
    color: '#7FFFD4',
    value: 123,
  },
  {
    color: '#78DBE2',
    value: 'Component',
  },
  {
    color: '#E32636',
    value: 'Class',
  },
  {
    color: '#AB274F',
    value: 2.5,
  },
  {
    color: '#9966CC',
    value: 'Operator',
  },
  {
    color: '#44944A',
    value: 55,
  },
  {
    color: '#CCCCFF',
    value: -432,
  },
  {
    color: '#77DDE7',
    value: 364,
  },
];

const cloneObjects = JSON.parse(JSON.stringify(OBJECTS));

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
export { cloneObjects };

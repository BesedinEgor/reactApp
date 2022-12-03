import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Header, Home, Info, OldTasks, Main, Posts, Error } from './components';
import './components/header/header.scss';
import './components/header/header.scss';
import './components/App.scss';
import './components/vars.scss';
import './components/generatingElements/generatingElements.scss';
import './components/main/Main.scss';
import './components/state/state.scss';
import './components/statesSquares/statesSquares.scss';
import './components/home/home.scss';
import './components/posts/posts.scss';

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
      <Router>
        <Header />
        <br />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/posts" element={<Posts />} />
            <Route
              path="/training-tasks"
              element={
                <OldTasks>
                  <Main />
                </OldTasks>
              }
            />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
export { cloneObjects };

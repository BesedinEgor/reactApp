import "./components/App.scss";
import "./components/vars.scss";
import "./components/generatingElements/generatingElements.scss";
import "./components/titleItem/titleItem.scss";

import TitleItem from "./components/titleItem/TitleItem";
import GeneratingElements from "./components/generatingElements/GeneratingElements";

const OBJECTS = [
  {
    name: "Egor",
    id: 1,
    ratio: 4.1,
  },
  {
    name: "Dmitriy",
    id: 2,
    ratio: 3.3,
  },
  {
    name: "Vadim",
    id: 3,
    ratio: 4.7,
  },
  {
    name: "Arseniy",
    id: 4,
    ratio: 2.5,
  },
  {
    name: "Pavel",
    id: 5,
    ratio: 3.9,
  },
  {
    name: "Igor",
    id: 6,
    ratio: 4.1,
  },
  {
    name: "Andrey",
    id: 7,
    ratio: 2.3,
  },
  {
    name: "Vladislav",
    id: 8,
    ratio: 4.3,
  },
  {
    name: "John",
    id: 9,
    ratio: 0.3,
  },
  {
    name: "Maksim",
    id: 10,
    ratio: 0.3,
  }
];


function App() {
  return (
    <div className="App">
        <TitleItem />
        <GeneratingElements 
        obj={OBJECTS}
        />
    </div>
  );
}

export default App;

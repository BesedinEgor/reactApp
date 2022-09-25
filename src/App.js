import "./components/App.scss";
import "./components/vars.scss";
import "./components/generatingElements/generatingElements.scss";
import "./components/titleItem/titleItem.scss";

import TitleItem from "./components/titleItem/TitleItem";
import GeneratingElements from "./components/generatingElements/GeneratingElements";

const OBJECTS = [
  {
    value: 4.1,
  },
  {
    value: "Method",
  },
  {
    value: 123,
  },
  {
    value: "Component",
  },
  {
    value: "Class",
  },
  {
    value: 2.5,
  },
  {
    value: "Operator",
  },
  {
    value: 55,
  },
  {
    value: 432,
  },
  {
    value: 364,
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

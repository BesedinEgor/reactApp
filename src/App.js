import "./components/vars.scss";
import "./components/App.scss";
import "./components/generatingElements/generatingElements.scss";
import "./components/titleItem/titleItem.scss";

import TitleItem from "./components/titleItem/TitleItem";
import GeneratingElements from "./components/generatingElements/GeneratingElements";

function App() {
  return (
    <div className="App">
        <TitleItem />
        <GeneratingElements />
    </div>
  );
}

export default App;

import GeneratingElements from '../generatingElements/GeneratingElements';
import GetGeneratedNumber from '../getGeneratedNumber/GetGeneratedNumber';
import { cloneObjects } from '../../App';
import { addNum } from '../getGeneratedNumber/GetGeneratedNumber';

const Main = () => {
  return (
    <div className="wrapper">
      <div className="titleItem">
        <h1>шо по реакту?!</h1>
      </div>
      <section className="elements">{GeneratingElements(cloneObjects)}</section>
      <div className="outputNumber">
        <GetGeneratedNumber num={5} func={addNum} />
      </div>
    </div>
  );
};

export default Main;

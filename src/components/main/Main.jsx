import GeneratingElements from '../generatingElements/GeneratingElements';
import GetGeneratedNumber from '../getGeneratedNumber/GetGeneratedNumber';
import addNum from '../getGeneratedNumber/GetGeneratedNumber';
import { cloneObjects } from '../../App';

const Main = () => {
  return (
    <div className="wrapper">
      <div className="titleItem">
        <h1>шо по реакту?!</h1>
      </div>
      <section className="elements">{GeneratingElements(cloneObjects)}</section>
      <div className="outputNumber">{GetGeneratedNumber(5, addNum)}</div>
    </div>
  );
};

export default Main;

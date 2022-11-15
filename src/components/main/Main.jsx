import GeneratingElements from '../generatingElements/GeneratingElements';
import GetGeneratedNumber, {
  AddNum1,
  AddNum2,
  AddNum3,
  AddNum4,
  AddNum5,
} from '../getGeneratedNumber/GetGeneratedNumber';
import { cloneObjects } from '../../App';
import State from '../state/State';
import StatesSquares from '../statesSquares/StatesSquares';

const Main = () => {
  return (
    <div className="wrapper">
      <div className="titleItem">
        <h1>шо по реакту?!</h1>
      </div>
      <section className="elements">{GeneratingElements(cloneObjects)}</section>
      <div className="outputNumber">
        <p className="outputNumber__text">Вывод генерируемых чисел:</p>
        <p className="outputNumber__field">
          <GetGeneratedNumber num={5} func={AddNum1} />
        </p>
        <p className="outputNumber__field">
          <GetGeneratedNumber num={3} func={AddNum2} />
        </p>
        <p className="outputNumber__field">
          <GetGeneratedNumber num={5} func={AddNum3} />
        </p>
        <p className="outputNumber__field">
          <GetGeneratedNumber num={-5} func={AddNum4} />
        </p>
        <p className="outputNumber__field">
          <GetGeneratedNumber num={5} func={AddNum5} />
        </p>
      </div>
      <State />
      <StatesSquares />
    </div>
  );
};

export default Main;

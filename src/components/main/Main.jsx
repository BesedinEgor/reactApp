import { Link } from 'react-router-dom';
import {
  GeneratingElements,
  GetGeneratedNumber,
  AddNum1,
  AddNum2,
  AddNum3,
  AddNum4,
  AddNum5,
  State,
  StatesSquares,
  Parent,
  ChildrenOne,
  ChildrenTwo,
} from '../';
import { cloneObjects } from '../../App';

const Main = () => {
  return (
    <div className="wrapper">
      <div className="titleItem">
        <h1>шо по реакту?!</h1>
      </div>
      <Link className='back' to={'/'}>Back</Link>
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

      <Parent>
        <ChildrenOne />
        <ChildrenTwo />
      </Parent>
    </div>
  );
};

export { Main };

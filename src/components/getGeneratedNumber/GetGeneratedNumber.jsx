import PropTypes from 'prop-types';

const addNum = (num) => num + 5;
const getGeneratedNumber = (props) => {
  const { num, func } = props;
  return func(num);
};

addNum.PropTypes = {
  num: PropTypes.number,
  func: PropTypes.func,
};

export { addNum };
export default getGeneratedNumber;

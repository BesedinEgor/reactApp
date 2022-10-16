// import PropTypes from 'prop-types';

const AddNum1 = (num) => num + 5;
const AddNum2 = (num) => num * 2;
const AddNum3 = (num) => num / 5;
const AddNum4 = (num) => num - 5;
const AddNum5 = (num) => num ** 3;

const getGeneratedNumber = (props) => {
  const { num, func } = props;
  return func(num);
};

// AddNum.PropTypes = {
//   num: PropTypes.number,
//   func: PropTypes.func,
// };

export { AddNum1, AddNum2, AddNum3, AddNum4, AddNum5 };
export default getGeneratedNumber;

const addNum = (num) => num + 5;
const getGeneratedNumber = (props) => {
  const { num, func } = props;
  return func(num);
};

export default getGeneratedNumber;
export { addNum };

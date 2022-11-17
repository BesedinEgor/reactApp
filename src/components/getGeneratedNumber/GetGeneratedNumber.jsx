const AddNum1 = (num) => num + 5;
const AddNum2 = (num) => num * 2;
const AddNum3 = (num) => num / 5;
const AddNum4 = (num) => num - 5;
const AddNum5 = (num) => num ** 3;

const GetGeneratedNumber = (props) => {
  const { num, func } = props;
  return func(num);
};

export { GetGeneratedNumber, AddNum1, AddNum2, AddNum3, AddNum4, AddNum5 };

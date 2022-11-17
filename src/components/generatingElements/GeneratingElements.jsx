const GeneratingElements = (props) => {
  return props
    .filter((el) => el.value !== String(el.value))
    .map((el) => {
      if (el.value > 5) {
        return (
          <div
            className="square"
            key={el.value}
            style={{ backgroundColor: '#44944A' }}
          >
            {el.value}
          </div>
        );
      } else if (el.value <= 5 && el.value >= 0) {
        return (
          <div
            className="square"
            key={el.value}
            style={{ backgroundColor: '#FFCF48' }}
          >
            {el.value}
          </div>
        );
      } else if (el.value < 0) {
        return (
          <div
            className="square"
            key={el.value}
            style={{ backgroundColor: '#B00000' }}
          >
            {el.value}
          </div>
        );
      }
    });
};

export { GeneratingElements };

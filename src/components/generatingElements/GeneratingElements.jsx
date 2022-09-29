import React from "react";

export const GeneratingElements = (props) => {
  return (
    <section className="elements">
      {props.cloneObjects
        .filter((el) => el.value !== String(el.value))
        .map((el) => {
          if (el.value > 5) {
            return <div
              className="square"
              key={el.value}
              style={{ backgroundColor: "#44944A" }}
            >
              {el.value}
            </div>;
          } else if (el.value <= 5 && el.value >= 0) {
            return <div
              className="square"
              key={el.value}
              style={{ backgroundColor: "#FFCF48" }}
            >
              {el.value}
            </div>;
          } else if (el.value < 0) {
            return <div
              className="square"
              key={el.value}
              style={{ backgroundColor: "#B00000" }}
            >
              {el.value}
            </div>;
          } else {
            return null;
          }
        })}
    </section>
  );
};

export default GeneratingElements;

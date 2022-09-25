import React from "react";

export const GeneratingElements = (props) => {
  return (
    <section className="elements">
      {props.obj.map(el => <div className="square" key={el.id}>{el.name}, {el.ratio}</div>)}
    </section>
  )
};

export default GeneratingElements;

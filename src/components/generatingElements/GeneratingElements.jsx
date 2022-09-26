import React from "react";

export const GeneratingElements = (props) => {
  return (
    <section className="elements">
      {props.obj.map(el => <div className="square" style={{backgroundColor:el.color}}>{el.value}</div>)}
    </section>
  )
};

export default GeneratingElements;

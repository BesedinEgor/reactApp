import React from 'react';

class ComponentLifeCicle extends React.Component {
  constructor(props) {
    console.clear();
    console.log('constructor');
    console.log(props);
    super();
    this.state = {
      s1: 0,
    };
  }

  buttonHandler = () => {
    let val = this.state.s1;
    val++;
    this.setState({ s1: val });
  };

  static getDerivedStateFromProps(props, state) {
    console.log('get derived state');
    return { s1: props.arg };
  }

  render() {
    console.log('render 1');
    return (
      <>
        {
          <div>
            {console.log('render 2')}
            <div>
              <button onClick={this.buttonHandler}>Push</button>
            </div>
            <div>{this.state.s1}</div>
          </div>
        }
      </>
    );
  }
}

export default ComponentLifeCicle;

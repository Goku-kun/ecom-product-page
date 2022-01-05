import React from "react";

class QuantitySelector extends React.Component {

  constructor(props){
    super(props);
    this.state = {count: 1};
  }

  onClick(type){
    this.setState(prevState => {
      return {count: type == 'add' ? prevState.count + 1: prevState.count -1}
    });
  }

  render(){
    return(
      <div className="quantity-selector">
        <input type='button' onClick={this.onClick.bind(this, 'sub')} value='-'/>
        <div>{this.state.count}</div>
        <input type='button' onClick={this.onClick.bind(this, 'add')} value='+'/>
      </div>
    );
  }
}

export default QuantitySelector;
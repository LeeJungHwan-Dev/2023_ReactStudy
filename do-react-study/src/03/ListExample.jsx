import React, { Component } from 'react';

class ListExample extends Component {
  render() {
    return (
      <React.Fragment>
        <input type="radio" name="option1" value="1" label="1개" />
        <input type="radio" name="option2" value="2" label="2개" />
        <input type="radio" name="option3" value="3" label="3개" />
      </React.Fragment>
    );
  }
}

export default ListExample;

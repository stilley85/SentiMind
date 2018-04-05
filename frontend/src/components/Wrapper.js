import React, { Component } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import InputBox from './InputBox';
import Button from './Button';

class Wrapper extends Component {
  constructor() {
    super();

    this.state = { query: undefined };
  }
  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <InputBox />
        <Button />
      </div>
    );
  }
}

export default Wrapper;
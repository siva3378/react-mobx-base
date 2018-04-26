import React, { Component } from 'react';
import propTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { compose } from 'recompose';
import CalculatorStore from './store';

import './styles.css';

class Calculator extends Component {
  render() {
    return (
      <div className="outer">
        <p>You clicked at : {CalculatorStore.name}</p>
        <button onClick={()=> CalculatorStore.setName(new Date().toISOString())} > Click me </button>
      </div>
    );
  }
}

Calculator.propTypes = {
}

// export default compose(observer,inject('CalculatorStore'))(Calculator);
export default observer(Calculator);
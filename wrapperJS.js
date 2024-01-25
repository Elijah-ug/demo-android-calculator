import './wrapper.css';
import './screen.css';
import './buttons.css';

import { useState } from 'react';
export default function WrapperJS() {
  const operators = ['+', '/', '-', '.', '*', '%'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const handleNumberBtns = value => {
    if (
      (operators.includes(value) && calc === '') ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const showNums = () => {
    let nums = [];
    for (let i = 1; i < 10; i++) {
      nums.push(
        <button onClick={() => handleNumberBtns(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return nums;
  };
  //equals function handler
  const computed = () => {
    if (operators.includes(calc.slice(-1))) {
      return;
    }
    const res = eval(calc.toString());
    setResult(res);
    setCalc('');
  };
  //clear one digit function handler
  const clearOne = () => {
    setCalc(calc.slice(0, -1));
  };
  // clearAll function handler
  const clearAll = () => {
    setCalc('');
    setResult('');
  };
  return (
    <div className='calculator-container'>
      <div className='screen'>
        <span>{calc || ''}</span>
        <br />
        {result ? <span className='calc-in-progress'>{result}</span> : ''}
        <br />
      </div>
      {/* buttons */}
      <div className='buttons'>
        <button onClick={clearAll} className='operators'>
          CC
        </button>

        <button onClick={clearOne} className='operators'>
          C
        </button>
        <button onClick={() => handleNumberBtns('+')} className='operators'>
          +
        </button>
        <button onClick={() => handleNumberBtns('-')} className='operators'>
          -
        </button>
        {showNums()}
        <button onClick={() => handleNumberBtns('/')} className='divide operators'>
          /
        </button>
        <button onClick={() => handleNumberBtns('*')} className='times operators'>
          *
        </button>
        <button onClick={computed} className='equals'>
          =
        </button>
        <button onClick={() => handleNumberBtns('0')}>0</button>
        <button onClick={() => handleNumberBtns('.')}>.</button>
        <button onClick={() => handleNumberBtns('%')} className='operators'>
          %
        </button>
      </div>
    </div>
  );
}

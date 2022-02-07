import { useState } from 'react';
import calImg from '../img/example.png';
import styles from '../css/calculator.module.css';
function Calculator() {
  let fomula = [];
  const [result, setResult] = useState('');

  function inputValue(event) {
    event.preventDefault();
    console.log(`Before input ${fomula}`);
    fomula.push(event.target.value);
    console.log(`After input ${fomula}`);
  }
  function calcValue(event) {
    event.preventDefault();
    const calc = String(eval(fomula.join('')));
    setResult(calc);
    fomula = [];
    console.log(`reset ${fomula}`);
    fomula.push(calc);
    console.log(`calc ${fomula}`);
  }
  function resetValue(event) {
    event.preventDefault();
    fomula = [];
    console.log('Reset');
  }
  return (
    <div>
      <h2 className={styles.title}>Calculator</h2>
      <div className={styles.compare}>
        <img width={'240px'} src={calImg} alt="example" />
        <div className={styles.calculator}>
          <h2 className={styles.result}>{result}</h2>
          <button onClick={resetValue} value="AC">
            AC
          </button>
          <button onClick={inputValue} value="+/-">
            +/-
          </button>
          <button onClick={inputValue} value="%">
            %
          </button>
          <button onClick={inputValue} value="/">
            /
          </button>
        </div>

        <div className={styles.calculator}>
          <button onClick={inputValue} value="7">
            7
          </button>
          <button onClick={inputValue} value="8">
            8
          </button>
          <button onClick={inputValue} value="9">
            9
          </button>
          <button onClick={inputValue} value="*">
            *
          </button>
        </div>
        <div className={styles.calculator}>
          <button onClick={inputValue} value="4">
            4
          </button>
          <button onClick={inputValue} value="5">
            5
          </button>
          <button onClick={inputValue} value="6">
            6
          </button>
          <button onClick={inputValue} value="-">
            -
          </button>
        </div>
        <div className={styles.calculator}>
          <button onClick={inputValue} value="1">
            1
          </button>
          <button onClick={inputValue} value="2">
            2
          </button>
          <button onClick={inputValue} value="3">
            3
          </button>
          <button onClick={inputValue} value="+">
            +
          </button>
        </div>
        <div className={styles.calculator}>
          <button className={styles.zero} onClick={inputValue} value="0">
            0
          </button>
          <button onClick={inputValue} value=".">
            .
          </button>
          <button onClick={calcValue} value="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;

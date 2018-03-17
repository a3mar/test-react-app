import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    let val = this.ms2pretty(new Date('2018-04-07T09:00') - new Date())
    this.state = { values: val }
  }


  componentDidMount() {
    this.timerID = setInterval(
      () => {
        let values = this.ms2pretty(new Date('2018-04-07T09:00') - new Date())
        this.setState({ values: values })
      },
      1000
    )
  }

  format = (num) => {
    let str = num.toString()
    if (str.length < 2) {
      return `0${str}`
    } else {
      return str
    }
  }

  ms2pretty = (ms, divider = null, result = []) => {
    if (divider == null) {
      let secs = ms / 1000
      let days = secs / 3600 / 24
      return this.ms2pretty(days % 1, 24, [Math.floor(days)])
    } else {
      if (result.length === 4) {
        return result
      } else {
        let value = ms * divider
        return this.ms2pretty(value % 1, 60, result.concat(Math.floor(value)))
      }
    }
  }

  render() {
    return (
      <div>
        <div className='content'>
          <p>{this.state.values[0]} days<br /> {this.format(this.state.values[1])}:{this.format(this.state.values[2])}:{this.format(this.state.values[3])}</p>
        </div>
      </div>
    );
  }
}

export default App;

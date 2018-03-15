import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(props) {
  super(props)
  let val = new Date('2018-03-18T023:00') - new Date()
  console.log(this.ms2pretty(val))
  this.state = { values: this.ms2pretty(val) }
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

ms2pretty =  (ms, divider = null, result = [] ) => {
  if (divider == null) {
    let secs = ms / 1000
    let days = secs / 3600 / 24
    return this.ms2pretty(days % 1, 24, [ Math.floor(days) ] )
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
      <div className="App">
          <h1 className="App-title">До Черногории осталось <br />
          {this.state.values[0]} суток <br /> 
          {this.state.values[1]} часов <br /> 
          {this.state.values[2]} минут <br />
          {this.state.values[3]} секунд
        </h1>
      </div>
    );
  }
}

export default App;

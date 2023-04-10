import logo from './logo.svg';
import './App.css';
import Lifecycle_Comp from './components/Lifecycle_Comp';
import { Component } from 'react';
import FormControlled from './components/FormControlled';
import FormUnControlled from './components/FormUnControlled';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "Rikkei Academy"
    }
  }
  render() {
    return (
      <div className="App">
        <Lifecycle_Comp company={this.state.company} />
        <button onClick={() => this.setState({ company: "Rikkeisoft" })}>Change Props</button>
        <FormControlled />
        <FormUnControlled />
      </div>
    );
  }
}

export default App;

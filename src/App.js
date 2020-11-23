import React from 'react';
import logo from './logo.svg';
import Form from './components/Form';
import RemoveItem from './components/RemoveItem';
import Items from './components/Items';
import './App.css';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<Form value={this.state.value}
			handleChange={this.handleChange}
			addItem={this.addItem}
			inputIsEmpty={this.inputIsEmpty}/>
		<RemoveItem deleteLastItem={this.deleteLastItem}
			noItemsFound={this.noItemsFound}/>
		<Items items={this.state.items}/>
      </div>
    );
  }
}

export default App;

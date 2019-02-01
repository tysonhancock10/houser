import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import {Provider} from 'react-redux'
import store from './ducks/store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <HashRouter>
      <div className="App">
      <Header />
      
      {routes}
      </div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;

import React from 'react'
import './style.css'
import Weather from './components/Weather';
import store from './store/store';
import { Provider } from 'react-redux'

function App() {
  return(
    <Provider store={store}>
      <Weather/>
    </Provider>
  );
}

export default App

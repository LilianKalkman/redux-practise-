import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

// met createStore maak je je const store; redux method die een store maakt met de reducers
// die je passed. store = "uitkomst" van je reducers (de value).
// dmv Provider, zorg je dat je App op de hoogte is van die store en daaruit werkt.
// = de koppelaar tussen react en redux. die je de prop meegeeft van de store die jij gecreeerd hebt. 

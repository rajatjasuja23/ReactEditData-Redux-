import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux'
import { createStore} from 'redux'
// import todoApp from './reducers';
// import Allreducers from './reducers/Todoreducers/Allreducers.js';
import Editreducer from './reducers/editreducers/index.js';

 let store = createStore(Editreducer);

ReactDOM.render( <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('app'));

 //ReactDOM.render( <App/>, document.getElementById('app'));
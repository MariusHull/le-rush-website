import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Contacts from './Contacts';
import * as serviceWorker from './serviceWorker';
import Inscription from './Inscription';
import Navbar from './Navbar';

//ReactDOM.render(<Navbar />, document.getElementById('navbarre'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

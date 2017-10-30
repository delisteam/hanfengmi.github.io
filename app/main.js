// require('bootstrap-loader');
import 'bootstrap/dist/css/bootstrap.css'
import css from '../css/style.css';
const greeter = require('./greeter.js');
document.querySelector('#root').appendChild(greeter())

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Favicon from 'react-favicon';


ReactDOM.render(
    <div>
        <Favicon url="https://www.wellabella.ca/wp-content/uploads/2019/07/LogoMakr_74frYa-1.png"/>
<App />
</div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

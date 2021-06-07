import React from 'react';
import ReactDOM from 'react-dom';
import Test from './TableState.jsx';



window.addEventListener('load', () => {
    let container = document.getElementById('TableState');
    if (container != null) {
        let component = <Test/>;
        ReactDOM.render(component, container);
    }
})

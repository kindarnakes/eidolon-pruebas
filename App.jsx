import React from 'react';
import ReactDOM from 'react-dom';
import Test from './TableState.jsx';


console.log("hola");
window.addEventListener('load', () => {
    let container = document.getElementById('TableState');
    console.log("listener");
    if (container != null) {
        console.log("if")
        let component = <Test/>;
        ReactDOM.render(component, container);
    }
})

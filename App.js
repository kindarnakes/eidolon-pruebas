import React from 'react';
import ReactDOM from 'react-dom';


class Hola extends React.Component {
    render() {
        return (
            <div>
                <h1>React Hello</h1>
                <p></p>
            </div>
        )
    }
}

let container = document.getElementById('React');
let component = <Hola />;
ReactDOM.render(component, container);
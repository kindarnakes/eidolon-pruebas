import 'react';
import 'react-dom';

class Hola extends React.Component {
    render() {
        return (
            <div>
                <h1>Hola mundo desde React</h1>
                <p></p>
            </div>
        )
    }
}

let container = document.getElementById('React');
let component = <Hola />;
ReactDOM.render(component, container);
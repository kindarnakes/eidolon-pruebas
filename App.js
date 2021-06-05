import 'react';
import 'react-dom';

class Hola extends React.Component {
    render() {
      return(
        <h1>Hola mundo desde React</h1>
      )
    }
 }

 let container = document.getElementById('React');
let component = <Hola />;
ReactDOM.render(component, container);
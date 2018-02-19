import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'bootstrap/dist/css/bootstrap.css';
import Sec from './components/Section';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Sec/>
                <div className="container">
                    <div className="row">
                        <h1 className="text-center">Welcome to React World!!!</h1>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root-react'));

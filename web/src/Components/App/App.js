import React, { Component } from 'react';
import './App.css';
import BreadcrumbComponent from '../Breadcrumb/Breadcrumb';
import Main from '../Main/Main'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <BreadcrumbComponent />
                </div>
                <Main />
            </div>
        );
    }
}

export default App;

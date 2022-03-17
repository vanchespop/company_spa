import './App.css';
import ControlsPanel from "./components/ControlsPanel/ControlsPanel.js";
import React from "react";
import {useSelector} from "react-redux";

function App() {
    const test = useSelector(state => state);
    console.log(test);
    return (
        <div className="App">
            <div className="container">
                <ControlsPanel/>
            </div>
            <div className="container">
            </div>
        </div>
    )
        ;
}

export default App;

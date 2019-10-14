import React from 'react';
import './App.css';
import {Display} from "./Display";
import {ButtonGroup} from "./ButtonGroup";

interface State {
    displayValue: string
    prev: string
    prev_prev: string
}

class App extends React.Component<Object, State> {
    state: Readonly<State> = {
        displayValue: "",
        prev: "",
        prev_prev: "",
    };

    private setDisplayValue = (newValue: string) => {
        this.setState({displayValue: newValue})
    }

    public onClick = (name: string) => {
        let operations = new Set(["+", "-", "*", "%"])
        if (name in operations){
            this.setState({prev_prev: this.state.prev, prev: name})
        } else if(this.state.prev_prev !== ""){

        }
    }


    render() {
        return (
            <div className='App'>
                <Display displayValue={this.state.displayValue}/>
                <ButtonGroup onClick={this.onClick}/>
            </div>
        )
    }
}

export default App;

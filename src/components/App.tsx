import React from 'react';
import './App.css';
import {Display} from "./Display";
import {ButtonGroup} from "./ButtonGroup";

interface State {
    displayValue: string
    first_value: string
    op: string
}

class App extends React.Component<Object, State> {
    state: Readonly<State> = {
        displayValue: "",
        first_value: "",
        op: "",
    };

    public onClick = (name: string) => {
        let operations = new Set(["+", "-", "*", "%"])
        if (operations.has(name)) {
            if (this.state.first_value !== ""){
                this.setState({op: name})
            }
        } else {
            if (this.state.first_value !== "" && this.state.op !== ""){
                if (this.state.op === "+"){
                    let result = String(Number(this.state.first_value) + Number(name))
                    this.setState({first_value: result, displayValue: result, op: ""})
                } else if (this.state.op === "-") {
                    let result = String(Number(this.state.first_value) - Number(name))
                    this.setState({first_value: result, displayValue: result, op: ""})
                }
            } else {
                this.setState({first_value: name, displayValue: name})
            }
        }
    };


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

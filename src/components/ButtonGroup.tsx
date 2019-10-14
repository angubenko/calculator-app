import * as React from "react";
import './App.css';
import {CalcButton} from "./Button";

interface Props {
    onClick: (name: string) => void
}

export const ButtonGroup: React.FunctionComponent<Props> = (props) => {
    const buttons = ["7", "8", "9", "AC", "4", "5", "6", "%", "1", "2", "3", "*", "0", "+", "-", "="];

    return (
        <div className='ButtonGroup'>
            {buttons.map( (btn: string) => {
                return (
                    <CalcButton name={btn} callBack={props.onClick}/>
                )
            })}
        </div>
    )
}
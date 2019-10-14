import * as React from "react";
import {Button, Intent} from "@blueprintjs/core";

interface Props {
    name: string
    callBack: (name: string) => void
}

export const CalcButton: React.FunctionComponent<Props> = (props) => {

    const onClickHandler = (e: React.MouseEvent) => {
        props.callBack(props.name)
    }

    return (
        <Button className='Button' intent={Intent.PRIMARY} text={props.name} onClick={onClickHandler}/>
    )
}
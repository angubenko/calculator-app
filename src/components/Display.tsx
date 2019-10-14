import * as React from "react";
import {render} from "react-dom";

interface Props {
    displayValue: string
}

export const Display: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <div className='Display'>
            {props.displayValue}
        </div>
    )
}

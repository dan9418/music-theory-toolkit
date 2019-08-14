import * as React from "react";
import "./NumericSelector.css";
import { SelectorProps } from "../SelectorConfig";
import { CharButton } from "../CharButton/CharButton";

export class NumericSelector extends React.Component<SelectorProps, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='numeric-selector'>
                <CharButton
                    active={false}
                    action={() => { this.props.setValue(this.props.value - 1); }}
                    character='-'
                />
                <CharButton
                    active={false}
                    action={null}
                    character={this.props.value}
                />
                <CharButton
                    active={false}
                    action={() => { this.props.setValue(this.props.value + 1); }}
                    character='+'
                />
            </div>
        );
    };
}
/*tuneString = (stringNumber, openPosition) => {
    this.setState((oldState) => {
        let newStrings = [];
        for (let i = 0; i < oldState.strings.length; i++) {
            let newString = ((i + 1) === stringNumber) ? { openPosition: openPosition } : oldState.strings[i];
            newStrings.push(newString);
        }
        return {
            strings: newStrings
        }
    });
}*/

/*getTuners = () => {
    let tuners = [];
    for (let i = 0; i < this.state.strings.length; i++) {
        tuners.push(<Tuner
            key={i}
            openPosition={this.state.strings[i].openPosition}
            tuneString={(position) => { this.tuneString(i + 1, position); }}
            removeString={() => { this.removeString(i); }}
        />);
    }
    return tuners;
}*/

/*insertString = (index) => {
    this.setState((oldState) => {
        return {
            strings: [...oldState.strings.slice(0, index), { openPosition: 0 }, ...oldState.strings.slice(index)]
        };
    });
}*/

/*removeString = (index) => {
    this.setState((oldState) => {
        return {
            strings: [...oldState.strings.slice(0, index), ...oldState.strings.slice(index + 1)]
        };
    });
}*/

import * as React from "react";
import { NumericSelector } from "../../InputPanel/Selectors/NumericSelector/NumericSelector";
import { DropdownSelector } from "../../InputPanel/Selectors/DropdownSelector/DropdownSelector";
import { SwitchSelector } from "../../InputPanel/Selectors/SwitchSelector/SwitchSelector";
import { ALL_GUITAR_FRET_LABELS, GuitarConfig } from "./GuitarConfig";

type GuitarConfigPanelProps = {
    setValue: (property: string, value: any) => void,
    viewerConfig: GuitarConfig;
}

export class GuitarConfigPanel extends React.Component<GuitarConfigPanelProps, null> {

    constructor(props) {
        super(props);
    }

    /*setValue = (property: string, value: any) => {
        let mergedConfig = { ...this.props.viewerConfig };
        mergedConfig.config[property] = value;
        this.props.setValue(mergedConfig);
    }*/

    getStringInputs = () => {
        let items = [];
        for (let i = 0; i < this.props.viewerConfig.strings.length; i++) {
            let child = this.props.viewerConfig.strings[i];
            items.push(<div key={i} className='string'>
                <div className='input-row-label'>{i}</div>
                <NumericSelector
                    value={this.props.viewerConfig.strings[i].openPosition}
                    setValue={(value) => {
                        let s = this.props.viewerConfig.strings;
                        s[i].openPosition = value;
                        this.props.setValue('strings', s);
                    }} />
                    </div>);
        }
        return items;
    }

    render = () => {
        return (
            <div className='guitar-config-panel'>
                <div className='input-row-label'>Fret Label</div>
                <DropdownSelector
                    data={ALL_GUITAR_FRET_LABELS}
                    value={this.props.viewerConfig.fretLabel}
                    setValue={(value) => { this.props.setValue('fretLabel', value); }} />
                <div className='input-row-label'>Low Fret</div>
                <NumericSelector
                    value={this.props.viewerConfig.fretLow}
                    setValue={(value) => { this.props.setValue('fretLow', value); }} />
                <div className='input-row-label'>High Fret</div>
                <NumericSelector
                    value={this.props.viewerConfig.fretHigh}
                    setValue={(value) => { this.props.setValue('fretHigh', value); }} />
                <div className='input-row-label'>Filter Octave</div>
                <SwitchSelector
                    value={this.props.viewerConfig.filterOctave}
                    setValue={(value) => { this.props.setValue('filterOctave', value); }} />
                <div className='input-row-label'>Show Dots</div>
                <SwitchSelector
                    value={this.props.viewerConfig.showDots}
                    setValue={(value) => { this.props.setValue('showDots', value); }} />
                <div className='input-row-label'>Strings</div>
                <NumericSelector
                    value={this.props.viewerConfig.strings.length}
                    setValue={(value) => {
                        if (value > this.props.viewerConfig.strings.length)
                            this.props.setValue('strings', [...this.props.viewerConfig.strings, { openPosition: 0 }]);
                        else
                            this.props.setValue('strings', this.props.viewerConfig.strings.splice(0, value));
                    }} />
                {this.getStringInputs()}
            </div>
        );
    }
}
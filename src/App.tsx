import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MasterViewer } from "./MasterViewer/MasterViewer";
import { ACCIDENTAL, DEGREE, INTERVAL, ALL_DEGREES, ALL_ACCIDENTALS } from "./Common/Theory/TheoryDefinitions";
import { DropdownSelector } from "./Common/Inputs/Selectors/DropdownSelector/DropdownSelector";
import { NumericSelector } from "./Common/Inputs/Selectors/NumericSelector/NumericSelector";
import { IntervalSelector } from "./Common/Inputs/Selectors/IntervalSelector/IntervalSelector";

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);

		this.state = {
			degree: DEGREE.C,
			accidental: ACCIDENTAL.natural,
			octave: 4,
			intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5]
		}
	}

	setValue = (property, value) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

	render = () => {
		let keyDef = {
			degree: this.state.degree,
			accidental: this.state.accidental
		};

		return (
			<>
				<div className='inputs'>
                    Degree <DropdownSelector data={ALL_DEGREES} value={this.state.degree} setValue={(value) => { this.setValue('degree', value); }} />
					Accidental <DropdownSelector data={ALL_ACCIDENTALS} value={this.state.accidental} setValue={(value) => { this.setValue('accidental', value); }} />
					Octave <NumericSelector value={this.state.octave} setValue={(value) => { this.setValue('octave', value); }} />
					Intervals <IntervalSelector keyDef={keyDef} value={this.state.intervals} setValue={(value) => { this.setValue('intervals', value); }} />
				</div>
				<MasterViewer
					keyDef={keyDef}
					intervals={this.state.intervals}
					octave={4}
				/>
			</>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App/>, domContainer);
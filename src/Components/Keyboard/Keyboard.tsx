import * as React from "react";
import "./Keyboard.css";
import { KeyboardKey, KeyboardKeyType } from "./KeyboardKey";
import { TheoryEngine } from "../../Common/TheoryEngine";
import "./Keyboard.css";
import { KeyCenter, Concept } from "../../Common/TheoryTypes";
import { NOTE_LABEL, DEGREE, ACCIDENTAL } from "../../Common/TheoryConstants";

export interface KeyboardProps {
    keyCenter?: KeyCenter,
    concept?: Concept,
    filterOctave?: boolean;
    noteLabel?: NOTE_LABEL;
    keyLow?: number;
    keyHigh?: number;
}

const DEFAULT_KEYBOARD_PROPS: KeyboardProps = {
    keyCenter: {
        degree: DEGREE.C,
        accidental: ACCIDENTAL.Natural,
        octave: 4
    },
    concept: {
        intervals: [],
        intervalOptions: {}
    },
    noteLabel: NOTE_LABEL.Interval,
    filterOctave: true,
    keyLow: 0,
    keyHigh: 24
};

const BLACK_KEY_INDICES: number[] = [0, 2, 4, 5, 7, 9, 11];

function getKeyboardKeys(config: KeyboardProps) {
    let notes = TheoryEngine.parseIntervals(config.keyCenter, config.concept)
    let keys = [];
    for (let i = config.keyLow; i <= config.keyHigh; i++) {
        let type = BLACK_KEY_INDICES.includes(i % 12) ? KeyboardKeyType.White : KeyboardKeyType.Black;
        keys.push(
            <KeyboardKey
                key={i}
                type={type}
                note={TheoryEngine.getNote(notes, config.keyLow + i, config.filterOctave)}
                noteLabel={config.noteLabel}
            />
        );
    }
    return keys;
}

export function Keyboard(props: KeyboardProps) {
    let config = Object.assign({}, DEFAULT_KEYBOARD_PROPS, props);
    return (
        <div className='keyboard'>
            {getKeyboardKeys(config)}
        </div>
    );
}
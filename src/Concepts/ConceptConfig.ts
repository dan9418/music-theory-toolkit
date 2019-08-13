import { Interval, PRESET_INTERVALS } from "./Interval/IntervalConfig";
import { PRESET_CHORDS } from "./Chord/ChordConfig";
import { PRESET_SCALES } from "./Scale/ScaleConfig";
import { PRESET_MODES } from "./Mode/ModeConfig";
import { Preset, ConceptConfig } from "../Theory/TheoryConfig";
import { ChordConfigPanel } from "./Chord/ChordConfigPanel";
import { IntervalConfigPanel } from "./Interval/IntervalConfigPanel";
import { ScaleConfigPanel } from "./Scale/ScaleConfigPanel";

export interface Concept {
    id: string;
    name: string;
    intervals: Interval[];
}

export interface ConceptDefinition {
    id: string;
    name: string;
    presets: Preset<ConceptConfig>[];
    configComponent: any;
    defaults: any;
}

export const CONCEPT_DEFINITIONS: ConceptDefinition[] = [
    {
        id: 'interval',
        name: 'Intervals',
        presets: PRESET_INTERVALS,
        configComponent: IntervalConfigPanel,
        defaults: {
            melodicInversion: false,
            reverse: false
        }
    },
    {
        id: 'chord',
        name: 'Chords',
        presets: PRESET_CHORDS,
        configComponent: ChordConfigPanel,
        defaults: {
            inversion: {
                id: 'none',
                name: 'None',
                rotation: 0
            },
            melodicInversion: false
        }
    },
    {
        id: 'scale',
        name: 'Scales',
        presets: PRESET_SCALES,
        configComponent: ScaleConfigPanel,
        defaults: {
            melodicInversion: false,
            reverse: false
        }
    },
    {
        id: 'mode',
        name: 'Modes',
        presets: PRESET_MODES,
        configComponent: ScaleConfigPanel,
        defaults: {
            melodicInversion: false,
            reverse: false
        }
    },
    /*{
        id: 'romanNumeral',
        name: 'Roman Numerals',
        presets: null
    }*/
];
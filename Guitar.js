class Guitar extends React.Component {
	
	constructor(props) {
        super(props);
        this.strings = [
            { openPosition:  16 },  // e
            { openPosition:  11 },  // B
            { openPosition:  7  },  // G
            { openPosition:  2  },  // D
            { openPosition: -3  },  // A
            { openPosition: -8  }   // E   
        ];
    }
    
    getStrings = () => {
        return this.strings.map((string, index) => {
            return e(String, {
                key: `key-${index}`,
                keyDef: this.props.keyDef,
                openPosition: string.openPosition,
                displaySettings: this.props.displaySettings
            }, null);
        });
    }

	render = () => {
		return e('div', {className: 'guitar'}, this.getStrings());
    };
}

class String extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getFrets = () => {
        let frets = [];
        for(let i = 0; i <= 12; i++) {
            let note = new Note({
                absolutePosition: this.props.openPosition + i,
                keyDef: this.props.keyDef
            });
            frets.push(e(Fret, {
                key: `fret-${i}`,
                note: note,
                open: (i === 0),
                displaySettings: this.props.displaySettings
            }, null));
        }
        return frets;
    }

	render = () => {
        let classes = ['guitar-string'];
		return e('div', {className: classes.join(' ')}, this.getFrets());
    };
}

class Fret extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getName = () => {
        switch(this.props.displaySettings.label)
        {
            case LABELS.None:
                return '';
            case LABELS.Name:
                return this.props.note.getName() || '';
            case LABELS.Interval:
                return this.props.note.getRelativeInterval().id || '';
            case LABELS.RelativePosition:
                return this.props.note.getRelativePosition() || '';
            case LABELS.AbsolutePosition:
                return this.props.note.getAbsolutePosition() || '';
            case LABELS.RelativeDegree:
                return this.props.note.getRelativeDegree() || '';
            case LABELS.AbsoluteDegree:
                return this.props.note.getAbsoluteDegree() || '';
            case LABELS.Octave:
                return this.props.note.getOctave() || '';
            default:
                return '';
        }
    }

    render = () => {
        let classes = ['guitar-fret'];
        let name = this.getName();
        if(this.props.open)
            classes.push('guitar-fret-open');
        
		return e('div', {className: classes.join(' ')}, name);
    };
}
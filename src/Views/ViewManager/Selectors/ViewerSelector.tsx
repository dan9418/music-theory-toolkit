import React = require("react");
import { BoxSelector } from "./BoxSelector/BoxSelector";
import { ViewerDefinitions } from "../Viewers/CommonView";

export class ViewerSelector extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggle = () => {
        this.setState((state) => {
            return { open: !state.open }
        });
    }

    render = () => {
        return <div className='view-manager-viewer-selector'>
            {this.state.open ?
                <div className='view-manager-viewer-selector-open' onClick={this.toggle as any}>
                    <BoxSelector
                        updateSelection={this.props.insertViewer}
                        param={ViewerDefinitions}
                        selectedValue={null}
                    />
                </div> :
                <div className='view-manager-viewer-selector-closed' onClick={this.toggle as any}>
                    <span>+</span>
                </div>
            }
        </div>;
    }
}
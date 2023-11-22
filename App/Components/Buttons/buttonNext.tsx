import React from "react";

export default class ButtonNext extends React.Component<any, any> {
    render(): React.ReactNode {
        let currentStep = this.props.currentStep;
        if (currentStep < 3) {
            return (
                <button type="button" onClick={this.props.next}>Next</button>
            );
        }
        return null;
    }
}

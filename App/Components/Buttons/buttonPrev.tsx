import React from "react";

export default class ButtonPrev extends React.Component<any, any> {
    render(): React.ReactNode {
        let currentStep = this.props.currentStep;
        if (currentStep > 1) {
            return (
                <button type="button" onClick={this.props.prev}>Prev</button>
            );
        }
        return null;
    }
}

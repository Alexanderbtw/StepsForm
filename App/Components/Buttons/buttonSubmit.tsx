import React from "react";

export default class ButtonSubmit extends React.Component<any, any> {
    render(): React.ReactNode {
        let currentStep = this.props.currentStep;
        if (currentStep === 3) {
            return (
                <button type="submit" form={this.props.formId}>Submit</button>
            );
        }
        return null;
    }
}

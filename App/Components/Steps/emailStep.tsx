import React from "react";

export default class EmailStep extends React.Component<any, any> {
    render() {
        if (this.props.currentStep !== 2) {
            return null;
        }
        return (
            <div>
                <label>Email: </label>
                <input name="email" type="text" placeholder="Enter Email" value={this.props.email} onChange={this.props.handleChange} />
            </div>
        );
    }
}

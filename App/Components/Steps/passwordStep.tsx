import React from "react";

export default class PasswordStep extends React.Component<any, any> {
    render() {
        if (this.props.currentStep !== 3) {
            return null;
        }
        return (
            <div>
                <label>Password: </label>
                <input name="password" type="text" placeholder="Enter Password" value={this.props.password} onChange={this.props.handleChange} />
            </div>
        );
    }
}

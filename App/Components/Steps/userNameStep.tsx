import React from "react";

export default class UserNameStep extends React.Component<any, any> {
    render() {
        if (this.props.currentStep !== 1) {
            return null;
        }
        return (
            <div>
                <label>Name: </label>
                <input name="username" type="text" placeholder="Enter Name" value={this.props.username} onChange={this.props.handleChange} />
            </div>
        );
    }
}

import React from "react";

import ButtonNext from "./Buttons/buttonNext";
import ButtonPrev from "./Buttons/buttonPrev";
import ButtonSubmit from "./Buttons/buttonSubmit";
import UserNameStep from "./Steps/userNameStep";
import EmailStep from "./Steps/emailStep";
import PasswordStep from "./Steps/passwordStep";

export default class UserForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentStep: 1,
            username: "",
            email: "",
            password: ""
        };
    }

    handleChange = (event: any) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        const {email, username, password} = this.state;
        alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
    }

    next = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        });
    }

    prev = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        });
    }

    render(): React.ReactNode {
        return (
            <div>
                <h1>Form</h1>
                <p>Step {this.state.currentStep}</p>

                <form id="myForm" onSubmit={this.handleSubmit}>
                    <UserNameStep
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        username={this.state.username}
                    />
                    <EmailStep
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                    />
                    <PasswordStep
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={this.state.password}
                    />
                </form>
                <p>
                    <ButtonPrev currentStep={this.state.currentStep} prev={this.prev}/>
                    <ButtonNext currentStep={this.state.currentStep} next={this.next}/>
                    <ButtonSubmit currentStep={this.state.currentStep} formId="myForm"/>
                </p>
            </div>
        );
    }
}

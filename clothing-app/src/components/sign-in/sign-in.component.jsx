import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttom/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import {
  SignInContainer,
  SignInTitle,
  ButtonBarContainer,
} from "./sign-in.styles";

class SignIn extends React.Component {
  // const [userCredentials, setUserCredentials] = useState({
  // email: "",
  // password: "",
  // });
  state = {
    email: "",
    password: "",
  };

  // const handleSubmit = async (e) => {
  handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  // const handleChange = (e) => {
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  // const { googleSignInStart } = this.props;

  render() {
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <ButtonBarContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="submit"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with google
            </CustomButton>
          </ButtonBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

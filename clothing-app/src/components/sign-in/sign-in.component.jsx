import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttom/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import {
  SignInContainer,
  SignInTitle,
  ButtonBarContainer,
} from "./sign-in.styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
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
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </ButtonBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;

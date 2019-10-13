import React from 'react';

import {SignInSignUpComponent} from './sign-in-and-sign-up.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <SignInSignUpComponent>
        <SignIn/>
        <SignUp/>
    </SignInSignUpComponent>
)

export default SignInAndSignUpPage;
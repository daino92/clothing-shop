import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {ButtonsComponent, SignInComponent} from './sign-in.styles';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value})
    }

    return (
        <SignInComponent>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" label="email" required
                    value={email} handleChange={handleChange} />
                <FormInput name="password" type="password" label="password" required
                    value={password} handleChange={handleChange} />
                <ButtonsComponent>
                    <CustomButton type="submit">Sign in</CustomButton>  
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton> 
                </ButtonsComponent>
            </form>
        </SignInComponent>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
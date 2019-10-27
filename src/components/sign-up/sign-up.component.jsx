import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {TitleComponent, SignUpComponent} from './sign-up.styles';
import {signUpStart} from '../../redux/user/user.actions';

const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        
        signUpStart({displayName, email, password})
    }

    const handleChange = event => {
        const {name, value} = event.target;

        setUserCredentials({...userCredentials, [name]: value })
    }

    return (
        <SignUpComponent>
            <TitleComponent as='h2'>I do not have an account</TitleComponent>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' label='Display Name'
                    value={displayName} onChange={handleChange} required/>
                <FormInput type='email' name='email' label='Email'
                    value={email} onChange={handleChange} required/>
                <FormInput type='password' name='password' label='Password'
                    value={password} onChange={handleChange} required/>
                <FormInput type='password' name='confirmPassword' label='Confirm Password'
                    value={confirmPassword} onChange={handleChange} required/>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpComponent>    
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
import React from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {TitleComponent, SignUpComponent} from './sign-up.styles';
import {signUpStart} from '../../redux/user/user.actions';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();

        const {signUpStart} = this.props;
        const {displayName, email, password, confirmPassword} = this.state;
        
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        
        signUpStart({displayName, email, password})
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <SignUpComponent>
                <TitleComponent as='h2'>I do not have an account</TitleComponent>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' label='Display Name'
                        value={displayName} onChange={this.handleChange} required/>
                    <FormInput type='email' name='email' label='Email'
                        value={email} onChange={this.handleChange} required/>
                    <FormInput type='password' name='password' label='Password'
                        value={password} onChange={this.handleChange} required/>
                    <FormInput type='password' name='confirmPassword' label='Confirm Password'
                        value={confirmPassword} onChange={this.handleChange} required/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpComponent>    
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
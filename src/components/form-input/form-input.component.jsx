import React from 'react';

import {GroupContainer, FormInputComponent, FormInputLabelComponent} from './form-input.styles';

const FormInput = ({ handleChange, label, ...props}) => (
    <GroupContainer>
        <FormInputComponent as='input' onChange={handleChange} {...props}/>
        {label ? (
            <FormInputLabelComponent as='label' className={props.value.length ? 'shrink' : ''}>
                {label}
            </FormInputLabelComponent>
        ) : null}
    </GroupContainer>
)

export default FormInput;
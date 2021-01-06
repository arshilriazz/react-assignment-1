import React from 'react';
import FormInput from '../atoms/FormInput';
import FormTextArea from '../atoms/FormTextArea';
import Submit from '../atoms/Submit';

const Form = () => {
    return(
        <div className="contactForm">
            <form>
                <h2>Send Message</h2>
                <FormInput idName="fname" label="Full Name" type="text"></FormInput>
                <FormInput idName="email" label="Email" type="text"></FormInput>
                <FormTextArea idName="message">Message...</FormTextArea>
                <Submit>Send</Submit>
            </form>
        </div>
    )
}

export default Form
import React from 'react';

const FormTextArea = (props) => {
    return(
        <div className="inputBox"> 
            <label for={props.idName}>{props.children}</label>
            <textarea id={props.idName} required="required" ></textarea>
        </div>
    )
}

export default FormTextArea
import React from 'react'
import './error-message.css';

const ErrorMessage = ({msg})=>{
    return(<div className="error-message-wrapper">
        <h6>Ошибка. {msg}.</h6>
    </div>)
}
export default ErrorMessage;
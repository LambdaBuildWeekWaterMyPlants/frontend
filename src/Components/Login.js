import React from "react";
import * as yup from 'yup'
import {schema} from '../Validation/LoginSchema'

export default function Login(props){

    const {
        values,
        disabled,
        change,
        submit,
        errors,
    } = props;

    const onChange = evt => {
        const { name, value} = evt.target;
        change(value);
        validate(name, value)
      }
      
      const onSubmit = evt => {
        evt.preventDefault()
        submit(values)
      }

      const validate = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then(() => {
            errors((prev) => ({ ...prev, [name]: '' }))
          })
          .catch((err) => {
            errors((prev) => ({ ...prev, [name]: err.errors[0] }))
          })
      }

 
   return (
        <>
        <form className ="loginForm" onSubmit = {onSubmit}>
            <h2>Please Sign In</h2>
            <div className="errors">
            {/* //add errors  */}
            </div>
            <div className = "loginInput">
                <div className = "userName">
                    <label className = "userNameInput">UserName:
                        <input
                        type = "text"
                        name = 'username'
                        onChange = {onChange}
                        value = {values.username}
                        />
                    </label>                
                </div>
                <div className ="password">
                    <label className = "passwordInput">Password:
                    <input
                    type = "password"
                    name = "password" 
                    onChange = {onChange}
                    value = {values.password}
                    />
                    </label>
                </div>
                <button disabled = {disabled}>Submit</button>
            </div>
        </form>

        </>
   )
}



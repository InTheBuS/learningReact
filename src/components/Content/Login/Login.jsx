import React from 'react';
import {Field, reduxForm} from "redux-form";
import {InputLogin, InputPassword, maxLength15, minLength2, required} from "../../../Utilities/Validations/Validations";


const LoginForm = (props) => {
    const {pristine, submitting} = props
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="login"
                    component={InputLogin}
                    type="text"
                    placeholder="Login"
                    validate={[required, maxLength15, minLength2]}
                />
            </div>
            <div>
                <Field
                    name="password"
                    component={InputPassword}
                    type="password"
                    placeholder="Password"
                    validate={[required]}
                />
            </div>
            <div>
                <Field name="rememberMe"
                       component="input"
                       type="checkBox"/> remember Me
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login
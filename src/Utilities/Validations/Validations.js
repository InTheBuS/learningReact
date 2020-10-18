import React from "react";
import formStyles from './FormControl.module.css'

export const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const maxLength = (max) => (value) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)

const minLength = (min) => (value) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)


export const InputLogin = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={formStyles.formControl + ' ' + (hasError ? formStyles.error : '')}>
            <div>
                <input {...props} {...input}/>
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}

export const InputPassword = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={formStyles.formControl + ' ' + (hasError ? formStyles.error : '')}>
            <div>
                <input {...props} {...input}/>
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}
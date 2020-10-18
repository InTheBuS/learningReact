import React from "react";
import {Field} from "redux-form";

const DialogsForm = () => {
        return (
            <form>
                <div>
                    <Field
                        name="message"
                        component="input"
                        type="text"
                        placeholder="Message"
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        )
    }

export default DialogsForm;



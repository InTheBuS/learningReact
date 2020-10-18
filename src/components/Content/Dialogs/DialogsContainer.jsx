import React from "react";
import {addMessage, onAddMessage} from "../../../redux/DialoguesReducer";
import {connect} from "react-redux";
import {AuthRedirectComponent} from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import DialogsCss from "./Dialogs.module.css";
import Dialogue from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="message"
                    component="textarea"
                    type="text"
                    placeholder="Message"
                />
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    )
}

const DialoguesContainerForm = reduxForm({form: 'dialogues'})(DialogsForm)

class DialoguesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    allMessagesData() {
        return this.props.dialoguesPage.allMessages.map(mData =>
            <Message className={mData.me ? DialogsCss.myMessage : DialogsCss.otherMessage} id={mData.id}
                     message={mData.message} me={mData.me} key={mData.id}/>)
    }


    allDialoguesData() {
        return this.props.dialoguesPage.allDialogues
            .map(dData => <Dialogue id={dData.id} name={dData.name} key={dData.id}/>)
    }

    addNewMessage = (values) => {
        console.log(values.message)
        this.props.addMessage(values.message)
    }

    render() {
        return (
            <div className={DialogsCss.dialogues}>
                <div className={DialogsCss.allDialogues}>
                    {this.allDialoguesData()}
                </div>
                <div className={DialogsCss.messages}>
                    {this.allMessagesData()}
                    <div className={DialogsCss.newMessageArea}>
                        <DialoguesContainerForm onSubmit={this.addNewMessage}/>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {

    return {
        dialoguesPage: state.dialoguesPage
    }
}

export default compose(
    connect(mapStateToProps, {/*onChangeMessage,*/ onAddMessage, addMessage, /*changeMessage*/}),
    AuthRedirectComponent
)
(DialoguesContainer);
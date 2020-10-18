import React from "react";
import {addNews, changeNewsText} from "../../../redux/NewsReducer";
import News from "./News";
import {connect} from "react-redux";

class NewsContainer extends React.Component {
    render() {
        return (
            <News news={this.props.news} tittle={this.props.tittle} body={this.props.body} addNews={this.props.addNews} changeNewsText={this.props.changeNewsText}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.news.news,
        tittle: state.news.newNewsTextTittle,
        body: state.news.newNewsTextBody
    }
}

export default connect(mapStateToProps, {addNews, changeNewsText})(NewsContainer)
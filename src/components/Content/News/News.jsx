import React from "react";
import Newscss from './News.module.css'
import SingleNews from "./SingleNews";

const News = (props) => {

    let newPostElement = React.createRef();
    console.log(props)

    let allNewsData = props.news
        .map(news =>  <SingleNews body={news.body} id={news.id}/>
        )

    return (
        <div>
            {allNewsData}
            <div>
                <textarea value={props.body} onChange={() => {
                    props.changeNewsText(newPostElement.current.value)
                }} ref={newPostElement}/>
            </div>
            <div>
                <button onClick={props.addNews}>ADD NEWS</button>
            </div>
        </div>
    )
}

export default News
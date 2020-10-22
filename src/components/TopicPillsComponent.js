import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {connect} from "react-redux";
import topicService from "../services/TopicService";
import topicReducer from "../reducers/topicReducer";

const TopicPills = (
    {
        lessonId,
        topics=[],
        createTopicForLesson,
        deleteTopic,
        updateTopic
    }) =>
    <div>
        <h3>Topics</h3>
        <ul className="nav nav-tabs">
            {
                topics.map(topic =>
                    <li key={topic._id} className="nav-item">
                        <a class="nav-link ">
                            {topic.title}
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteTopic(topic._id)}>
                                <i className="fa fa-times"></i>
                            </button>

                            {
                                !topic.editing &&
                            <span>
                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    updateTopic({...topic, editing: true})}>
                                <i className="fa fa-pencil"></i>
                            </button>

                            </span>
                            }
                            {
                                topic.editing &&
                            <span>
                                <button
                                    className="btn btn-success"
                                    onClick={() =>
                                        updateTopic({...topic, editing: false})}>
                                <i className="fa fa-check"></i>
                                </button>
                            <input
                                value={topic.title}/>
                            </span>
                            }
                        </a>
                    </li>
                )}

            <button
                className="btn btn-primary "
                onClick={() => createTopicForLesson(lessonId)}>
                <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
            <br/>
        </ul>
    </div>

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId
})

const propertyToDispatchMapper = (dispatch) => ({
    updateTopic: (newTopic) =>
        topicService.updateTopic(newTopic)
            .then(actualTopic => dispatch({
                type: "UPDATE_TOPIC",
                topic: actualTopic
            })),
    deleteTopic: (topicId) =>
        topicService.deleteTopic(topicId)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicId
            })),
    createTopicForLesson: (lessonId) =>
        topicService.createTopicForLesson(
            lessonId, {
                title: "New Topic"
            })
            .then(actualTopic => dispatch({
                type: "CREATE_TOPIC_FOR_LESSON",
                topic: actualTopic
            }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(TopicPills)

// export default class TopicPillsComponent extends React.Component{
//     render() {
//         return(
//             <ul className="nav nav-pills">
//                 <li className="nav-item">
//                     <a className="nav-link active" href="#">Topic 1</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Topic 2</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Topic 3</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Topic 4</a>
//                 </li>
//                 <button className="btn btn-success pull-right">
//                     <i className="fa fa-plus" aria-hidden="true"></i>
//                 </button>
//
//             </ul>
//
//         )
//     }
// }
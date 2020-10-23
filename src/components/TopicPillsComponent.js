import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {connect} from "react-redux";
import topicService from "../services/TopicService";
import topicReducer from "../reducers/topicReducer";
import {Link} from "react-router-dom";
import moduleService from "../services/ModuleService";

const TopicPills = (
    {
        course,
        moduleId,
        topics=[],
        lessonId,
        createTopic,
        deleteTopic,
        updateTopic,
        edit,
        ok
    }) =>
    <div>
        <h3>Topics({lessonId})</h3>
        <ul className="nav nav-tabs">
            {
                topics.map(topic =>
                    <li
                        key={topic._id}
                        className="nav-item">
                        <Link to ={`/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}`}
                              class="nav-link ">

                            {
                                !topic.editing &&
                            <span>
                                {topic.title}
                                <button
                                    className="btn btn-primary"
                                    onClick={() => edit(topic)}>
                                    <i className="fa fa-pencil"></i>
                                </button>

                            </span>
                            }
                            {
                                topic.editing &&
                            <span>

                                <input
                                className= "form-control"
                                onChange={(event)=> updateTopic({
                                    ...topic,
                                    title:event.target.value
                                })}
                                value={topic.title}/>
                                <button
                                className="btn btn-success"
                                onClick={() => ok(topic)}>
                                <i className="fa fa-check"></i>
                                </button>
                            </span>
                            }
                            <button
                            className="btn btn-danger"
                            onClick={() => deleteTopic(topic._id)}>
                            <i className="fa fa-times"></i>
                            </button>
                        </Link>
                    </li>)}

                    <span>
                        <button
                            className="btn btn-primary form-inline"
                            onClick={() => createTopic(lessonId)}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <br/>
                    </span>

        </ul>
    </div>

const stateToPropertyMapper = (state) => ({
    course:state.courseReducer.course,
    moduleId: state.lessonReducer.moduleId,
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId
})

const dispatchMapper = (dispatch) => ({
    ok:(topic) =>
        topicService.updateTopic(topic._id,{
            ...topic,editing:false
        }).then (status=> dispatch({
            type:"UPDATE_TOPIC",
            topic: {...topic,editing:false}
        })),

    edit:(topic) =>
        topicService.updateTopic(topic._id,{
            ...topic,editing:true
        }).then (status=> dispatch({
            type:"UPDATE_TOPIC",
            topic:{...topic,editing:true}
        })),

    updateTopic: (topic) =>
        dispatch({
            type:"UPDATE_TOPIC",
            topic:topic
        }),
        // topicService.updateTopic(newTopic)
        //     .then(actualTopic => dispatch({
        //         type: "UPDATE_TOPIC",
        //         topic: actualTopic
        //     })),
    deleteTopic: (topicId) =>
        topicService.deleteTopic(topicId)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicId
            })),
    createTopic: (lessonId) =>
        topicService.createTopic(lessonId, {
            title: "New Topic"
        })
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic: topic
            }))
})

export default connect
(stateToPropertyMapper, dispatchMapper)
(TopicPills)
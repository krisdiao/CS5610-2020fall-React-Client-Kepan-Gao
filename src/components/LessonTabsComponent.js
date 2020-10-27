import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import lessonReducer from "../reducers/lessonReducer";
import {connect} from "react-redux";
import lessonService from "../services/LessonService";
import {Link} from "react-router-dom";
import moduleService from "../services/ModuleService";

const LessonTabs = (
    {
        course,
        moduleId,
        lessons=[],
        createLessonForModule,
        deleteLesson,
        updateLesson,
        edit,
        ok
    }) =>
    <div>
        <h1>
            <Link to="/courses"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>

            Lessons ({moduleId})
        </h1>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                        <li key={lesson._id}
                            className="nav-item">
                            <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}
                                  class="nav-link ">
                            {
                            !lesson.editing &&
                            <span>
                                {lesson.title}
                                <button
                                    className="btn btn-primary"
                                    onClick={() => edit(lesson) }>
                                    <i className="fa fa-pencil"></i>
                                </button>
                            </span>
                            }
                            {
                            lesson.editing &&
                            <span>
                                <input
                                    className= "form-control"
                                    onChange={(event)=> updateLesson({
                                        ...lesson,
                                        title:event.target.value
                                    })}
                                    value={lesson.title}/>
                                <button
                                    className="btn btn-success"
                                    onClick={() => ok(lesson)}>
                                <i className="fa fa-check"></i>
                                </button>
                            </span>
                            }
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteLesson(lesson._id)}>
                                <i className="fa fa-times"></i>
                            </button>
                            </Link>
                        </li>
                )}
                <span className="pull-right form-inline">
                    <button
                        className="btn btn-primary"
                        onClick={() => createLessonForModule(moduleId)}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </span>
                <br/>
        </ul>
    </div>

const stateToPropertyMapper = (state) => ({
    course:state.courseReducer.course,
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId
})

const propertyToDispatchMapper  = (dispatch) => ({
    ok:(lesson) =>
        lessonService.updateLesson(lesson._id,{
            ...lesson,editing:false
        }).then (status=> dispatch({
            type:"UPDATE_LESSON",
            lesson: {...lesson,editing:false}
        })),

    edit:(lesson) =>
        lessonService.updateLesson(lesson._id,{
            ...lesson,editing:true
        }).then (status=> dispatch({
            type:"UPDATE_LESSON",
            lesson:{...lesson,editing:true}
        })),

    updateLesson: (Lesson) =>
        dispatch({
            type:"UPDATE_LESSON",
            lesson:Lesson
        }),

        // lessonService.updateLesson(Lesson)
        //     .then(actualLesson => dispatch({
        //         type: "UPDATE_LESSON",
        //         lesson: Lesson
        //     })),
    deleteLesson: (lessonId) =>
        lessonService.deleteLesson(lessonId)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonId
            })),
    createLessonForModule: (moduleId) =>
        lessonService.createLessonForModule(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson => dispatch({
                type: "CREATE_LESSON_FOR_MODULE",
                lesson: actualLesson
            }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper )
(LessonTabs)
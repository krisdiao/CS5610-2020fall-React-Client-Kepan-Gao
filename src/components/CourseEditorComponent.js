import React from "react";
import {findCourseById} from "../services/CourseService";
import ModuleListComponent from "./ModuleListComponent";
import TopicPills from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
import WidgetListContainer from "../containers/WidgetListContainer";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService";
import lessonService from "../services/LessonService"
import LessonTabs from "../components/LessonTabsComponent";
import topicService from "../services/TopicService";
import widgetService from "../services/WidgetService"


class CourseEditorComponent extends React.Component{

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId

        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        // this.props.findLessonsForModule(moduleId)
        // this.props.findTopicsForLesson(lessonId)
        // this.props.findAllWidgets()
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
        }

        if(lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }

        if(topicId) {
            this.props.findWidgetsForTopic(topicId)
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        if(moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if(lessonId !== prevProps.match.params.lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
        if(topicId) {
            this.props.findWidgetsForTopic(topicId)
        }

    }

    render(){
        return(
            <div>
                <h1>Course Editor</h1>
                <div>
                    <LessonTabs/>
                </div>
                <br/>
                <div className="row">
                    <div className="col-4">
                        <ModuleListComponent/>
                    </div>
                    <div className="col-8">
                        <TopicPills/>
                        <WidgetListComponent/>
                    </div>
                </div>
            </div>
    )
    }
}

const stateToPropertyMapper = (state) => ({
    course:state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) =>({
    findWidgetsForTopic: (topicId) =>
    {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => {
                dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets,
                    topicId
                })
            })
    },

    findAllWidgets: () =>
        widgetService.findAllWidgets()
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets
            })),

    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "SET_COURSES",
            course: actualCourse
        })),
    findModulesForCourse: (courseId) =>
        moduleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: actualModules
        })),
    findLessonsForModule: (moduleId) =>
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons,
                moduleId
            })),
    findTopicsForLesson: (lessonId) =>
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type:"FIND_TOPICS_FOR_LESSON",
                topics,
                lessonId
            }))
})

export default connect
(stateToPropertyMapper,propertyToDispatchMapper)
(CourseEditorComponent)



import React from "react";
import {findCourseById} from "../services/CourseService";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";

export default class CourseEditorComponent extends React.Component{

    state ={
        course:{
            _id:"",
            title:""
        }
    }



    componentDidMount() {
        console.log(this.props)
        findCourseById(this.props.match.params.courseId)
            .then(actualCourse => this.setState({
                course:actualCourse
                })
            )
    }

    render(){
        return(
            <div>
                <h1>Course Editor {this.props.match.params.courseId}</h1>
                <h2>{this.state.course.title}</h2>
                <div>
                    <h2>Lessons</h2><LessonTabsComponent/>
                </div>
                <br/>
                <div className="row">
                    <div className="col-4">
                        <h2>Modules</h2><ModuleListComponent/>
                    </div>
                    <div className="col-8">
                        <TopicPillsComponent/><WidgetListComponent/>
                    </div>


                </div>


            </div>
    )


    }

}





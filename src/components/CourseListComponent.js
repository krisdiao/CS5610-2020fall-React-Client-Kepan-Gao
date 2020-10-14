import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses,deleteCourse,updateCourse, createCourse} from "../services/CourseService";
import "bootstrap/dist/css/bootstrap.css";
import CourseGridComponent from "./CourseGridComponent";
import {Route,Link} from "react-router-dom";

class CourseListComponent extends React.Component {

    state = {
        courses: [],
        courseBeingEdited:{}
    }

    componentDidMount() {
        findAllCourses()
            .then(courses =>{
                this.setState( {
                        courses: courses

                })
            })
    }

    deleteCourse =(course)=> {
        deleteCourse(course._id)
            .then(status => this.setState(prevState => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                })
            ))


    }

    addCourse =() => {
        const newCourse ={
            // _id:(new Date()).getMilliseconds()+"",
            title:"New Course",
            owner:"me",
            modified:(new Date()).toDateString()
        }

        createCourse(newCourse)
            .then(actualCourse =>this.setState(prevState => ({
                    courses:[
                        ...prevState.courses, actualCourse
                    ]
            })))
    }

    editCourse =(course) =>{
        this.setState({
            courseBeingEdited:course
        })
    }

    render() {
        return(

            <div className="container">

                <h1 className="form-inline">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    Course List (for {this.props.instructor}) {this.props.term}
                    <input className="form-control"/>
                    <button className="btn btn-danger pull-right"><i className="fa fa-plus" aria-hidden="true"></i></button>
                </h1>
                <div>
                    <table className="table table-hover">
                        <thread>
                            <tr>
                                <th>Title</th>
                                <th>Owner</th>
                                <th>Last Modified</th>
                                <th>
                                    <Link to="/courses/grid">
                                        <i className="fa fa-th-large card-deck pull-right"
                                           aria-hidden="true">
                                        </i>
                                    </Link>
                                </th>
                                <th><i className="fa fa-list pull-right"
                                       aria-hidden="true"
                                       >
                                </i></th>
                                <th><i className="fa fa-sort-alpha-asc pull-right"
                                       aria-hidden="true">
                                </i></th>
                            </tr>
                        </thread>
                        <tbody>
                        {
                        this.state.courses.map((course) =>
                            <CourseRowComponent
                                courseBeingEdited={this.state.courseBeingEdited}
                                editCourse={this.editCourse}
                                deleteCourse={this.deleteCourse}
                                course={course} />
                                )}
                        </tbody>
                        <button
                            onClick={this.addCourse}
                            className="btn btn-success">
                            Add Course
                        </button>
                    </table>
                </div>
            </div>
        );
    }
}





export default CourseListComponent

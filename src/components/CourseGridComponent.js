import React from "react";
import {findAllCourses,deleteCourse,updateCourse, createCourse} from "../services/CourseService";
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseCardComponent from "./CourseCardComponent";
import Grid from '@material-ui/core/Grid';

export default class CourseGridComponent extends React.Component{
    state = {
        courses:[]

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

            <div>

                <h1 className="form-inline">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    Course List (for Jose)
                    <input className="form-control"/>
                    <button className="btn btn-danger pull-right"><i className="fa fa-plus" aria-hidden="true"></i></button>
                </h1>
                <table className="table">
                <thread>
                    <tr>
                        <th>Recent Documents</th>
                        <th>Owner</th>
                        <th>Last Modified</th>
                        <th>
                            <Link to="/courses/grid">
                                <i className="fa fa-th-large card-deck pull-right"
                                   aria-hidden="true">
                                </i>
                            </Link>
                        </th>
                        <th>
                            <Link to="/courses">
                                <i className="fa fa-list pull-right"
                                   aria-hidden="true">
                                </i>
                            </Link>
                        </th>
                        <th><i className="fa fa-sort-alpha-asc pull-right"
                               aria-hidden="true">
                        </i></th>
                    </tr>
                </thread>
                </table>
                <div className={"card-deck"}>



                    {
                        this.state.courses.map((course) =>
                            <CourseCardComponent
                                courseBeingEdited={this.state.courseBeingEdited}
                                editCourse={this.editCourse}
                                deleteCourse={this.deleteCourse}
                                course={course} />
                        )}
                </div>
            </div>
        )



    }
}


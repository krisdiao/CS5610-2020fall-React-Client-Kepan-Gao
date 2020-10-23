import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditorComponent from "./CourseEditorComponent";
import CourseGridComponent from "./CourseGridComponent";

export class CourseManagerComponent extends React.Component{
    state = {
        course:[]

    }


    render() {
        return(
            <div>
                <BrowserRouter>

                    <div className="container">
                        <Link to="/login">Login</Link> |
                        <Link to="/register">Register</Link>|
                        <Link to="/profile">Profile</Link>|
                        <Link to="/courses">Courses</Link>|
                        <Link to="/edit">Editor</Link>|
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/courses" exact>
                            <CourseListComponent course={this.state.courses} instructor="Jose" />
                        </Route>
                        {/*<Route path="/table"*/}
                        {/*exact*/}
                        {/*component={CourseTableComponent}/>*/}
                        <Route path="/courses/grid"
                        exact
                        component={CourseGridComponent}/>
                        <Route
                            path={[
                                "/edit/:courseId",
                                "/edit/:courseId/modules/:moduleId",
                                "/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                                "/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                            ]}
                            exact
                            component={CourseEditorComponent}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
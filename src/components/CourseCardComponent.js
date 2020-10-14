import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";
import "bootstrap/dist/css/bootstrap.css";

const courseBeingEdited = false
const editCourse =() => {}

export default class CourseCardComponent extends React.Component{
    state ={
        editing:false,
        course: this.props.course
    }

    render() {
        return(
            <div className={"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12"}>
                <div className={"container"}>
                    <div className="card" styles={{width: '30rem'}}>
                        <img className="card-img-top"
                             src="https://picsum.photos/id/1073/200/300"/>
                    <div className="card-body">
                        <div>
                        <p className="card-title">
                            {
                                this.state.editing &&
                                <input
                                    className="form-control"
                                    onChange={(event) => {
                                        const newTitle= event.target.value
                                        this.setState(prevState => ({
                                            course: {...prevState.course, title:newTitle}

                                        }))

                                    }}
                                    value={this.state.course.title}/>
                            }
                            {
                                !this.state.editing &&
                                <Link to ={`/edit/${this.props.course._id}`}>{this.props.course.title} {this.props.course._id}</Link>
                            }

                        </p>

                        <p className="card-text">{this.props.course.owner}</p>
                        <p className="card-text">{this.props.course.modified}</p>

                        <span className="float-right">
                            <button
                                onClick={ ()=> this.props.deleteCourse(this.props.course)}
                                className="btn btn-danger">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                            {
                                !this.state.editing &&
                                <button
                                    onClick={()=> this.setState({editing:true})}
                                    className="btn btn-primary">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </button>
                            }
                            {
                                this.state.editing &&
                                <button
                                    onClick={()=> {
                                        updateCourse(this.state.course._id, this.state.course)
                                            .then(status => this.setState({editing: false}))

                                    }}
                                    className="btn btn-success"><i className="fa fa-check-square-o" aria-hidden="true"></i>
                                </button>
                            }
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

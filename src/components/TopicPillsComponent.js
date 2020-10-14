import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class TopicPillsComponent extends React.Component{
    render() {
        return(
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Topic 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 3</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 4</a>
                </li>
                <button className="btn btn-success pull-right">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>

            </ul>

        )
    }
}
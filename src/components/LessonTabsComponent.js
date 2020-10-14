import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class LessonTabsComponent extends React.Component{
    render() {
        return(
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active"
                                                href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Build</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Link</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Theme</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Settings</a></li>
                </ul>

            </div>

        )
    }
}
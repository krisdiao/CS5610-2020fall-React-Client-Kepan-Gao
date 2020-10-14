import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class WidgetListComponent extends React.Component{
    render() {
        return(
            <div>
                <br/>
                <h3>Heading Widgets</h3>

                <span className="pull-right">
                                <a href="#" className="btn btn-warning"><i className="fa fa-arrow-up"></i></a>
                                <a href="#" className="btn btn-warning"><i className="fa fa-arrow-down"></i></a>
                                <select>
                                    <option>Heading</option>
                                    <option>Slides</option>
                                    <option>Videos</option>
                                    <option>Documents</option>
                                </select>
                                <a href="#" className="btn btn-danger"><i className="fa fa-times-circle"></i></a>
                        </span>
                <br/>

                <br/>
                <div>
                    <input className="form-control" placeholder="Heading text"></input>
                        <br/>
                        <select className="form-control">
                            <option>Heading 1</option>
                            <option>Heading 2</option>
                            <option>Heading 3</option>
                            <option>Heading 4</option>
                        </select>
                        <br/>
                    <input className="form-control" placeholder="Widget name"></input>

                </div>
                <h3>Preview</h3>
                <h1>Heading text</h1>
            </div>
        )
    }
}
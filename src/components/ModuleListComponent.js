import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class ModuleListComponent extends React.Component{
    render() {
        return(
                <div>
                    <div>
                        <br/>

                        <ul className="list-group wbdv-module-list">
                            <li className="list-group-item wbdv-module-item"><span
                                className="wbdv-module-item-title">HTML </span> <i
                                className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
                            </li>
                            <li className="list-group-item active wbdv-module-item"><span
                                className="wbdv-module-item-title">CSS </span> <i
                                className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
                            </li>
                            <li className="list-group-item wbdv-module-item"><span
                                className="wbdv-module-item-title">jQuery</span> <i
                                className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
                            </li>
                            <li className="list-group-item wbdv-module-item"><span
                                className="wbdv-module-item-title">React</span> <i
                                className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
                            </li>
                            <li className="list-group-item wbdv-module-item"><span
                                className="wbdv-module-item-title">Redux</span> <i
                                className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
                            </li>
                            <li className="list-group-item wbdv-module-item"><span
                                className="wbdv-module-item-title">Native</span> <i
                                className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
                            </li>
                            <li className="list-group-item wbdv-module-item"><span
                                className="wbdv-module-item-title">Angular</span> <i
                                className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
                            </li>
                            <li className="list-group-item wbdv-module-item"><span
                                className="wbdv-module-item-title">Node</span> <i
                                className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
                            </li>
                            <li className="list-group-item">
                                <button className="btn btn-success pull-right">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </button></li>
                        </ul>
                    </div>
            </div>
        )
}
}
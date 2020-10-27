import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {connect} from "react-redux";
import {createWidget,deleteWidget,updateWidget,editWidget,okWidget} from "../actions/widgetActions";
import widgetReducer from "../reducers/widgetReducer";

const WidgetList = ({
                        widgets=[],
                        createWidget,
                        deleteWidget,
                        updateWidget,
                        editWidget,
                        okWidget}) =>
    <div>
        <h3>Widgets</h3>
        <ul className="nav nav-pills">
            {
                widgets.map(widget =>
                <li className="nav-item">
                    {
                        widget.editing &&
                        <span>
                            <input className= "form-control"
                                onChange={(event) => updateWidget({
                                    ...widget,
                                    name:event.target.value
                                })}
                                value={widget.name}/>
                            <button
                                className="btn btn-success"
                                onClick={()=> okWidget(widget)}>
                            <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                        </span>

                    }
                    {
                        !widget.editing &&
                            <span>
                                {widget.name}
                                <button
                                    className="btn btn-primary"
                                    onClick={()=> editWidget(widget)}>
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </button>
                            </span>
                    }
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteWidget(widget) }>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </li>
                )
            }
        </ul>

        <button  className="btn btn-primary pull-right" onClick={createWidget}>
            <i className="fa fa-plus" aria-hidden="true"></i>
        </button>

    </div>


const stateToPropertyMapper =(state) =>({
    widgets: state.widgetReducer.widgets
})


const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget:(widget) => deleteWidget(dispatch,widget),
    createWidget:() => createWidget(dispatch),
    updateWidget:(widget) => updateWidget(dispatch,widget),
    editWidget:(widget) => editWidget(dispatch,widget),
    okWidget:(widget) => okWidget(dispatch,widget),
})



export default connect( stateToPropertyMapper,propertyToDispatchMapper)(WidgetList)


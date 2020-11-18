import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    editWidget,
    okWidget,
    moveUp,
    moveDown,
    setWidgetType
} from "../actions/widgetActions";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import Switch from "@material-ui/core/Switch";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";

const WidgetList = ({
                        widgets=[],
                        course,
                        moduleId,
                        lessonId,
                        topicId,
                        createWidget,
                        deleteWidget,
                        updateWidget,
                        editWidget,
                        okWidget,
                        setWidgetType,

                    }) =>
    <div>
        <h3>
            Widgets({topicId})
        </h3>
        <ul>
            {

                widgets.map(widget =>
                <li
                    key={widget.id}
                    className="nav-item">


                                {
                                    widget.type === "HEADING" &&
                                    <HeadingWidget
                                        key={widget.id}
                                        widget={widget}
                                        deleteWidget={deleteWidget}
                                        updateWidget={updateWidget}
                                        okWidget={okWidget}
                                        editWidget={editWidget}
                                        setWidgetType={setWidgetType}

                                    />
                                }
                                {
                                    widget.type === "PARAGRAPH" &&
                                    <ParagraphWidget
                                        key={widget.id}
                                        widget={widget}
                                        deleteWidget={deleteWidget}
                                        updateWidget={updateWidget}
                                        okWidget={okWidget}
                                        editWidget={editWidget}
                                        setWidgetType={setWidgetType}

                                    />
                                }
                                {
                                    widget.type === "LIST" &&
                                    <ListWidget
                                        key={widget.id}
                                        widget={widget}
                                        deleteWidget={deleteWidget}
                                        updateWidget={updateWidget}
                                        okWidget={okWidget}
                                        editWidget={editWidget}
                                        setWidgetType={setWidgetType}

                                    />
                                }
                                {
                                    widget.type === "IMAGE" &&
                                    <ImageWidget
                                        key={widget.id}
                                        widget={widget}
                                        deleteWidget={deleteWidget}
                                        updateWidget={updateWidget}
                                        okWidget={okWidget}
                                        editWidget={editWidget}
                                        setWidgetType={setWidgetType}

                                    />
                                }
                </li>
                )
            }
        </ul>

        <button  className="btn btn-primary pull-right" onClick={() => createWidget(topicId)}>
            <i className="fa fa-plus" aria-hidden="true"></i>
        </button>

    </div>


const stateToPropertyMapper = (state) => ({
    topicId: state.widgetReducer.topicId,
    widgets: state.widgetReducer.widgets,
    course:state.courseReducer.course,
    moduleId: state.lessonReducer.moduleId,
    lessonId: state.topicReducer.lessonId
})


const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidget: (topicId) => createWidget(dispatch,topicId),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    setWidgetType: (widget) => setWidgetType(dispatch, widget),
    okWidget: (widget) => okWidget(dispatch, widget),
    moveUp:(widget) => moveUp(dispatch,widget),
    moveDown:(widget) => moveDown(dispatch,widget),

})



export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(WidgetList)

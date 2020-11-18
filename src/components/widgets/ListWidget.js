import React from "react";
import "./WidgetStyleSheet.css";
import Switch from "@material-ui/core/Switch";

const ListWidget = ({
                             widget,
                             deleteWidget,
                             updateWidget,
                             okWidget,
                             editWidget
                         }) =>

    <div className="wbdv-light-grey-border">
        <label className="pull-right">
            <Switch
                type="checkbox"
                onChange={()=> editWidget(widget)}
                checked={widget.editing}
                color="primary"/>
            Preview Off
        </label>
        <label className="pull-right">
            <Switch
                type="checkbox"
                onChange={()=> okWidget(widget)}
                checked={widget.editing}
                color="primary"/>
            Preview On
        </label>
        {
            widget.editing &&
            <div>
            <h3>List</h3>
            <span className="pull-right">
                    <button
                        className="btn btn-success"
                        onClick={()=> okWidget(widget)}>
                        Save
                    </button>
                <button className="btn btn-warning "
                    // onClick={() => moveUp(widget) }
                >
                    <i className="fa fa-arrow-up "></i>
                </button>
                <button className="btn btn-warning "
                    // onClick={() => moveDown(widget) }
                >
                    <i className="fa fa-arrow-down"></i>
                </button>
                <select className="form-control-sm">
                    <option>List</option>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>Image</option>
                    <option>Hyperlink</option>
                    <option>Video</option>
                </select>
                <button
                    className="btn btn-danger "
                    onClick={() => deleteWidget(widget) }>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                </span>
            <br/>
            <br/>
            <textarea
                onChange={(event)=> updateWidget({
                    ...widget,
                    title:event.target.value
                })}
                value={widget.text}
                className="form-control">
            </textarea>
            <br/>
            <select className="form-control">
                <option>Unordered list</option>
                <option>Ordered list</option>
            </select>
            <br/>
            <input
                onChange={(event)=> updateWidget({
                    ...widget,
                    title:event.target.value
                })}
                value={widget.name}
                className="form-control" />
            <br/>
            <h3>Preview</h3>
            {widget.text}
            </div>
        }
        {
            !widget.editing &&
            <div>
            <h3>Preview</h3>
            {widget.text}
            </div>
        }
    </div>

export default ListWidget

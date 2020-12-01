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
                <select
                    onChange={(event)=> updateWidget({...widget,
                    type:event.target.value})}
                        value={widget.type}
                        className="form-control-sm" >
                    <option value="HEADING">Heading</option>
                    <option value="PARAGRAPH">Paragraph</option>
                    <option value="LIST">List</option>
                    <option value="IMAGE">Image</option>
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
                rows="3"
                cols="10"
                onChange={(event)=> updateWidget({
                    ...widget,
                    text:event.target.value
                })}
                value={widget.text}
                className="form-control">
            </textarea>
            <br/>
            <select
                onChange={(event)=> updateWidget({...widget,
                    value:event.target.value})}
                value={widget.value}
                className="form-control">
                <option value="unordered">Unordered list</option>
                <option value="ordered">Ordered list</option>
            </select>
            <br/>
            <input
                onChange={(event)=> updateWidget({
                    ...widget,
                    name:event.target.value
                })}
                value={widget.name}
                className="form-control" />
            <br/>
            <h3>Preview</h3>
                {
                    widget.value === "unordered" &&
                    <ul>{widget.text}</ul>
                }
                {
                    widget.value === "ordered"&&
                    <li>{widget.text}</li>
                }
            </div>
        }
        {
            !widget.editing &&
            <div>
            <h3>Preview</h3>
                {
                    widget.value === "unordered" &&
                    <ul>{widget.text}</ul>
                }
                {
                    widget.value === "ordered"&&
                    <li>{widget.text}</li>
                }
            </div>
        }
    </div>

export default ListWidget

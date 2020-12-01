import React from "react";
import "./WidgetStyleSheet.css";
import Switch from "@material-ui/core/Switch";

let select;
const ParagraphWidget = ({
                             widget,
                             deleteWidget,
                             updateWidget,
                             okWidget,
                             editWidget,
                             setWidgetType,

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
                <h3>Paragraph</h3>
                <span className="pull-right">
                    <button
                        className="btn btn-success"
                        onClick={() => okWidget(widget)}>
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
                {/*<select     ref={node => select = node}*/}
                {/*            value={widget.type}*/}
                {/*            onChange={() => setWidgetType(widget.id, select.value)}*/}
                {/*            className="form-control-sm">*/}
                {/*        <option>Heading</option>*/}
                {/*        <option>Paragraph</option>*/}
                {/*        <option>HTML</option>*/}
                {/*        <option>Link</option>*/}
                {/*        <option>iFrame</option>*/}
                {/*</select>*/}
                <select
                    onChange={(event)=> updateWidget({
                    ...widget,
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
                    onClick={() => deleteWidget(widget)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                </span>
                <br/>
                <br/>
                <textarea
                    onChange={(event) => updateWidget({
                        ...widget,
                        text: event.target.value
                    })}
                    value={widget.text}
                    className="form-control">
            </textarea>
                <br/>
                <input
                    onChange={(event) => updateWidget({
                        ...widget,
                        name: event.target.value
                    })}
                    value={widget.name}
                    className="form-control"/>
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

export default ParagraphWidget

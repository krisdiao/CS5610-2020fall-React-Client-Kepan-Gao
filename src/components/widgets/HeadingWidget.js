import React from "react";

const HeadingWidget = (
    {
        widget,
        deleteWidget,
        updateWidget,
        okWidget,

    }
    ) =>
    <div className="wbdv-light-grey-border">
        {
            widget.editing &&
            <div>
                <h3>Heading Widget</h3>
                <span className="pull-right">
                    <button
                        className="btn btn-success"
                        onClick={()=> okWidget(widget)}>
                        Save
                    </button>
                    <button className="btn btn-warning">
                        <i className="fa fa-arrow-up "></i>
                    </button>
                    <button className="btn btn-warning">
                        <i className="fa fa-arrow-down"></i>
                    </button>
                    <select className="form-control-sm" >
                        <option>Heading</option>
                        <option>Paragraph</option>
                        <option>List</option>
                        <option>Image</option>
                        <option>Hyperlink</option>
                        <option>Video</option>
                    </select>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteWidget(widget)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>

                </span>
                <br/>
                <br/>
                <input placeholder="Text" className="form-control" />
                <br/>
                <select className="form-control" >
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                    <option>Heading 4</option>
                    <option>Heading 5</option>
                    <option>Heading 6</option>
                </select>
                <br/>
                <input
                    onChange={(event)=> updateWidget({
                        ...widget,
                        title:event.target.value
                    })}
                    value={widget.name}
                    className="form-control" />
            </div>
        }
        {
            !widget.editing &&
            <div>
                <h3>Preview</h3>
                {
                    widget.size === 1 &&
                    <h1>{widget.text}</h1>
                }
                {
                    widget.size === 2 &&
                    <h2>{widget.text}</h2>
                }
                {
                    widget.size === 3 &&
                    <h3>{widget.text}</h3>
                }


            </div>
        }
    </div>
export default HeadingWidget
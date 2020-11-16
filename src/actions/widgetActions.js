import widgetService from "../services/WidgetService"


export const DELETE_WIDGET ="DELETE_WIDGET"
export const UPDATE_WIDGET ="UPDATE_WIDGET"
export const CREATE_WIDGET ="CREATE_WIDGET"
// export const EDIT_WIDGET ="EDIT_WIDGET"
// export const OK_WIDGET ="OK_WIDGET"
export const TOGGLE_EDITING="TOGGLE_EDITING"

export const createWidget = (dispatch,topicId) =>
    widgetService.createWidget(topicId)
        .then(widget => dispatch({
            type: "CREATE_WIDGET",
            widget,

        }))

export const updateWidget = (dispatch,widget) =>
    dispatch({
                    type:"UPDATE_WIDGET",
                    widget
                })

    // widgetService.updateWidget(widget.id,widget)
    //     .then(status =>
    //         dispatch({
    //             type:"UPDATE_WIDGET",
    //             widget
    //         }))

export const deleteWidget = (dispatch,widget) =>
    widgetService.deleteWidget(widget.id)
        .then(status => dispatch({
            type:"DELETE_WIDGET",
            widget
            })
        )


export const editWidget = (dispatch,widget) => {
    debugger
    widgetService.updateWidget(widget._id, {...widget, editing: true})
        .then(status => {
            debugger
                dispatch({
                    type: "UPDATE_WIDGET",
                    widget: {...widget, editing: true}
                })
            }
        )
}

export const okWidget = (dispatch,widget) =>
    widgetService.updateWidget(widget.id,{...widget,editing:false})
        .then(status => dispatch({
                type:"UPDATE_WIDGET",
                widget:{...widget,editing:false}
            })
        )

export const toggleEditing = (id, checked) => {
    return {
        type: "TOGGLE_EDITING",
        id: id,
        editing: checked
    }}

export const moveUp = (dispatch,widget) =>{
    return{
        type:"MOVE_UP",
        widget
    }
}

export const moveDown = (dispatch,widget) =>{
    return{
        type:"MOVE_DOWN",
        widget
    }
}


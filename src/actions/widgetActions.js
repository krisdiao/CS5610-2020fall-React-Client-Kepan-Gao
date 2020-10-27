export const DELETE_WIDGET ="DELETE_WIDGET"
export const UPDATE_WIDGET ="UPDATE_WIDGET"
export const CREATE_WIDGET ="CREATE_WIDGET"
export const EDIT_WIDGET ="EDIT_WIDGET"
export const OK_WIDGET ="OK_WIDGET"

export const createWidget = (dispatch) =>
    dispatch({type:"CREATE_WIDGET" })

export const updateWidget = (dispatch,widget) =>
    dispatch({type:UPDATE_WIDGET, widget})

export const deleteWidget = (dispatch,widget) =>
    dispatch({type:DELETE_WIDGET,widget })

export const editWidget = (dispatch,widget) =>
    dispatch({type:UPDATE_WIDGET, widget:{...widget,editing:true}})

export const okWidget = (dispatch,widget) =>
    dispatch({type:UPDATE_WIDGET, widget:{...widget,editing:false}})



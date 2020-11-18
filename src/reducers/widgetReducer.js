import {DELETE_WIDGET,CREATE_WIDGET,UPDATE_WIDGET} from "../actions/widgetActions";


const initialState ={
    widgets:[]
}

const widgetReducer =(state = initialState,action) =>{
    switch (action.type){
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId,
            }
        case "FIND_ALL_WIDGETS":
            return {
                ...state,
                widgets: action.widgets
            }

        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [...state.widgets, action.widget]
            }
        case UPDATE_WIDGET:
            // const newState =
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id === action.widget.id ?
                        action.widget : widget)
            }
            // return newState

        case DELETE_WIDGET:
            return{
                ...state,
                widgets: state.widgets.filter(widget => widget !== action.widget)
            }
        default:
            return state

        case "SET_WIDGET_TYPE":
            let newState = JSON.parse(JSON.stringify(state))
            let index;
            index = newState.findIndex(function (widget) {
                return widget.id === action.id})
            newState[index].widget = action.widget
                return newState



        // case "MOVE_UP":
        //     let index = state.indexOf(action.widget);
        //     state.move(index, index - 1);
        //     return state.splice(0);
        //
        // case "MOVE_DOWN":
        //     let index = state.indexOf(action.widget);
        //     state.move(index, index + 1);
        //     return state.splice(0);

        // case 'TOGGLE_EDITING':
        //     newState = JSON.parse(JSON.stringify(state))
        //     index = newState.findIndex(
        //         function (widget) {
        //             return widget.id === action.id
        //         })
        //     newState[index].editing = action.editing
        //     console.log(newState)
        //     return newState

    }
}

export default widgetReducer

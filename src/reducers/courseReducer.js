const initialState ={
    courses:[],
    course:{
        _id:"1111",
        title:"Some Courses"
    }
}

const courseReducer = (state=initialState,action)=>{
    switch (action.type){
        case "SET_COURSES":
            return {
                ...state,
                course:action.course,
            }
        default:
            return state
    }
}
export default courseReducer
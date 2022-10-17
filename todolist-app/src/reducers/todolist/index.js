import { ADD_TODO, DELETE_TODO, DETAIL_TODO, UPDATE_TODO } from "../../action/todolistaction";

const initialState = {
list : [],
detailTodo : ''
}

const todolist = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            
            
        return {
            ...state, list : [...state.list, action.payload]
        };   
        case DELETE_TODO:
            
            
        return {
            ...state, list : action.payload
        };
        case DETAIL_TODO:
            
            
        return {
            ...state, detailTodo :  action.payload
        }
        case UPDATE_TODO:
            
            
        return {
            ...state, list : action.payload
        }

        default :
        return state;
    }
}

export default todolist
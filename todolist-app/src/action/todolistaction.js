export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DETAIL_TODO = 'DETAIL_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addlisttodo = (todo) => {
    return(dispatch) => {

        dispatch({
            type : ADD_TODO,
            payload : todo
            
        })
    }
}

export const deletelisttodo = (todo) => {
    return(dispatch) => {

        dispatch({
            type : DELETE_TODO,
            payload : todo
            
        })
    }
}

export const detaillisttodo = (todo) => {
    return(dispatch) => {

        dispatch({
            type : DETAIL_TODO,
            payload : todo
            
        })
    }
}

export const updatelisttodo = (todo) => {
    return(dispatch) => {

        dispatch({
            type : UPDATE_TODO,
            payload : todo
            
        })
    }
}
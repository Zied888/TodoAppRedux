import {ADD_TODO,DELETE_TODO,EDIT_TODO,COMPLETE_TODO} from '../constants/actionType'
export function AddToList (payload){
    return{type:ADD_TODO,payload}
    
}
export function deleteFromList  (payload){
    return{type:DELETE_TODO,payload}
    
}
export function editTodo(text,id){
    return{type:EDIT_TODO,
    payload:{text,id}}
        
}
export function completeTodo(id){
    return{type:COMPLETE_TODO,
           payload:id}
}
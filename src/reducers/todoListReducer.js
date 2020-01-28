import { ADD_TODO, DELETE_TODO,EDIT_TODO, COMPLETE_TODO } from "../constants/actionType";
// const initState=[{text:"",id:0,isComplete:false}]
const initState={
    tab:[],
}
const todoListReducer=(state=initState, action)=>{ 
    
    switch(action.type){
        case ADD_TODO:
         
            return {tab:[...state.tab,action.payload]}
            case DELETE_TODO:
                return {tab:state.tab.filter(el=>el.id!==action.payload)}
                case EDIT_TODO:
                    return {tab:[...state.tab.map(el=>el.id===action.payload.id?{...el,text:action.payload.text}:el)]}
                 
                case COMPLETE_TODO: 
                   return {tab:[...state.tab.map(el=>el.id===action.payload?{...el,isComplete:!el.isComplete}:el)]}
                    default: 
                    return state
    }
} 
export default todoListReducer;
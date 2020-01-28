import React from 'react';
import {connect} from 'react-redux';
import {deleteFromList,completeTodo} from './actions/action';
import EditModal from './editModal'
 class DisplayList extends React.Component{
    render() {
        return (this.props.itemsList.map((el,i)=>{
          return (<div key={el.id}>
          <p  style={{textDecoration:el.isComplete?"line-through":"none"}} > {el.text} </p> 
            <button onClick={
                        ()=> this.props.deleteFromList(el.id)  
                                     }      > x </button>
                                     <button onClick={()=>this.props.complete(el.id)}>{el.isComplete?"undo":"complete"}</button>
                                     <EditModal todo={el}  />
            </div>)
        })   
                
            
        )
    }
}
const mapStateToProps=state=>{
    return {
        itemsList:state.tab
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        deleteFromList :(currentArticle)=>{dispatch(deleteFromList(currentArticle))},
        complete:(pay)=>dispatch(completeTodo(pay))
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (DisplayList);
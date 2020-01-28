import React from 'react';
import {AddToList} from './actions/action';
import {connect} from 'react-redux';
class AddToDo extends React.Component {
    constructor() {
        super();
        this.state = { 
            text:''
         }
    }
    handleChange=(event)=>{
        this.setState({
            text:event.target.value
        },console.log(this.state.text,'voila le contenu de ma state UserInput'));
    }
    CompleteClick() {
                this.setState(prevState => ({
                  isToggleOn: !prevState.isToggleOn
                }));
              }
        
    render() {
        return (
            <div>
            <form>
                <input type="text"
                placeholder="Add Your To Do "
                value={this.state.text}
                onChange={this.handleChange} />
                
                    <button onClick={(event)=>{event.preventDefault(event); this.props.handleAdd({text:this.state.text,id:Date.now(),isComplete:false })}}>Add</button>
                    
            </form>
            </div>
        );
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        handleAdd:(newArticle)=>{dispatch(AddToList(newArticle))}
    }
}
export default connect(null,mapDispatchToProps) (AddToDo);
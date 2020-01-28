import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'
import './index.css';
import {editTodo} from '../src/actions/action'
import { connect } from 'react-redux';
class editModal extends Component {
    constructor(props){
        super(props)
        this.state={
            text:this.props.todo.text,
            show:false
        }
    }
     
   
   handleClose = () =>{this.setState({show:false})}
   handleShow = () => this.setState({show:true});
   handleChange=(event)=>{
       this.setState({
           text:event.target.value
       })
   }
    render() {
        return (
            <div className="">
                 <>
        <Button variant="primary" onClick={this.handleShow}>
          Edit
        </Button>
        
       
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
         <Modal.Body> 
             <input type="text" placeholder="edit"
                 value={this.state.text}
                 onChange={this.handleChange}
             />
         </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              X
            </Button>
            <Button variant="primary" onClick={()=>{this.props.edit(this.state.text,this.props.todo.id);this.handleClose()}}>
              Save
            </Button>
            
          </Modal.Footer>
        </Modal>
        
      </>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=> {
    return {
        edit:(text,id)=>dispatch(editTodo(text,id))
    }
}
export default connect(null,mapDispatchToProps) (editModal)
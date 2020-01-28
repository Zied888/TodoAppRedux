import React from 'react';
import DisplayList from './DisplayList';
import AddToDo from './AddToDo';
import EditModal from './editModal';
class App extends React.Component {

  
   
  render() {
    return (
      <div>
        <h1>Daily To Do List</h1>
        <AddToDo />
        <h3>Add your Todo</h3>
        <DisplayList />
        
        
        
      </div>
      
    )};
  }
export default App;



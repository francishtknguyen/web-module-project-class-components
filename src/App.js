import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
const todo = [
  {
    task: 'First Task',
    id: '36912',
    completed: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo: todo
    }
  }

  toggleItem = (id)=> {
    const newTodo = this.state.todo.map(task => {
      if(task.id ===id){
        return({...task, completed:!task.completed })
      }
      else{
        return task
      }
  })
  this.setState({
    todo:newTodo
  })  
};

  addItem = (itemName)=> {
    this.setState({
      todo: [...this.state.todo, {task: itemName, id: this.state.todo.length, completed: false}]
    })
  };

  clearItems = ()=> {
    this.setState({
      todo: this.state.todo.filter( task => {return !task.completed})
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleItem={this.toggleItem} todo={this.state.todo} />
        <TodoForm addItem = {this.addItem} clearItems={this.clearItems}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const todos = [
  {
    name: 'Laundry',
    id: 123,
    completed: false
  },
  {
    name:'Dishes',
    id: 124,
    completed: false
  },
  {
    name: 'Cut grass',
    id: 125,
    completed: false
  },
  {
    name: 'Clean',
    id: 126,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    // initialize state object
    this.state = {
      todos
    };
  }

  toggleComplete = todoId => {
    console.log(todoId)

    this.setState({
      todos: this.state.todos.map(item=> {
        if (todoId === todos.id) {
          return {
            ...todos, 
            completed: !todos.completed
          };
        }
        return todos;
      })  
    });
  };

  addItem = (e, todo) => {
    e.preventDefault();
    
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  };

  clearCompleted = e => {
    e.preventDefault();
    const todos = this.state.todos.filter(todo => !todo.completed)
  }

  render() {
    return (
      <div className="App">
      
          <h1>Todo List</h1>
          <TodoForm addItem={this.additem}/>
          <TodoList 
            todos={this.state.todos} 
            toggleComplete= {this.toggleComplete}
          />
      </div>
    );
  }
}

export default App;

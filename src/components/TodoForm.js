import React from 'react';

class TodoForm extends React.Component {
    // Constructor w state
    constructor() {
        super();
        this.state ={
            name: ''
        };
    }

    handleChanges = e => {
        // Update state w each keystroke
        this.setState({ name: e.target.value });
    };  

    // class property to submit form
    submitTask = e => {
        e.preventDefault();
        this.props.addTodo(e, this.state.todo)
        this.setState({ name: ''});
        
    }

    render() {
        return (
            <form on Submit={this.submitTask}>
                <input
                 type="text"
                 name="todo"
                 value= {this.state.todo}
                 onChange={this.handleChanges}
                />
                <button onClick={this.props.addItem}>Add</button>
            </form>
        );
    }
}
export default TodoForm;
import React from 'react'


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state= {
            input:''
        }
    }

    handleChange = e=> {
        this.setState({
            input: e.target.value
        })
    };
    handleSubmit = e=> {
        e.preventDefault();
    };
    handleAdd = e=> {
        this.props.addItem(this.state.input);
        
    };
    handleClear = e=> {
        this.props.clearItems();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="task"/>
                <button onClick={this.handleAdd}>Add Todo</button>
                <button onClick={this.handleClear}>Clear Completed</button>
            </form>
        )
    }

}

export default TodoForm;
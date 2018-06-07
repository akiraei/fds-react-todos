import React, { Component } from 'react';


let count = 0;

class App extends Component {

  
  state = {
    todos: [
      {id: count++
        ,body: "react study"
        ,complete: true
      }
      ,{
        id: count++
        ,body: "redux study"
        ,complete: false
      }
    ],
    newTodoBody: ""
  }
  

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    })
  }

  handleButtonClick = e => {
    e.preventDefault()
    if(this.state.newTodoBody) {
      const newTodo = {
        body: this.state.newTodoBody,
        complete: false,
        id: count++
      }

      this.setState({
        todos: [
          ...this.state.todos, newTodo
        ],
        newTodoBody:''
      })
    }
  }


  handleTodoItemComplete = id => {
    this.setState({
      todos: this.state.todos.map( t=> {
        const newTodo = {
          ...t
        }
        if (t.id === id) {
          newTodo.complete = true;
        }
        return newTodo;
      })
    })
  }



  handleTodoItemDelete = id => {
    this.setState({
      todos : this.state.todos.filter( t => {
       return  t.id !== id
        })
    }) 
  }




  
  render() {
    const {todos, newTodoBody} = this.state
    let count = 0;
    return (
      <div> 
     

      <div>React</div>


      <h1>todo list</h1>
      <form>
        <label>
          input
        <input type="text" value={newTodoBody} onChange={this.handleInputChange}/>
        <button onClick={this.handleButtonClick}>submit</button>
        </label>
      </form>


      <ul> 
        {  todos.map(todo => <TodoItem 
        key = {todo.id}
        {...todo}
        onComplete={this.handleTodoItemComplete}
        onDelete={this.handleTodoItemDelete}
         />)  }
      </ul>
           

      </div>
    );
  }
}




class TodoItem extends Component {

  render(){
    const {id, body, complete, onComplete} = this.props;
    return (
      <li className={ complete ? 'complete' : ""} key={id}>
      
        {body} 
         <button onClick = { e => onComplete(id) } > complete </button>
         <button onClick = { e => onDelete(id) } > delete </button> 
        
        </li>
     )}
}

export default App;

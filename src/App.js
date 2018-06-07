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

  handleCompleteClick = e => {

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
        {
         todos.map(todo => (
           <li className={ todo.complete ? 'complete' : ""} key={todo.id}> {todo.body} 
              
              
              <button onClick={ (e) => {
                 this.setState({
                     todos : todos.map( t => {
                         const newTodo = {
                             ...t 
                           }
                           if (t.id === todo.id) {
                               newTodo.complete = true;
                             }
                             return newTodo
                           })             
                         }) 
                       }
                     } > complete </button>

            
            
            <button onClick = { e => {
              this.setState({
                todos : todos.filter( t => {
                 return  t.id !== todo.id
                  }
                )
              })
              
              
             }} > delete </button>
             
             
             </li>))
        }
      </ul>
           


      </div>
    );
  }
}

export default App;

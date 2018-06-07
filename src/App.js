import React, { Component } from 'react';


class App extends Component {

  state = {
    todos: [
    {id: 1
    ,body: "react study"
    ,complete: true
    }
    ,{
      id:2
      ,body: "redux study"
      ,complete: false
    }
  ]
  }


  render() {
    const {todos} = this.state
    return (
      <div> 
     
      <div>React</div>

      <h1>todo list</h1>
      <ul> 
        {
         todos.map(todo => (
            <li className={ todo.complete ? 'complete' : ""} key={todo.id}>{todo.body}</li>
          ))
        }
      </ul>

      <form>
        <input/> >



      </form>
           


      </div>
    );
  }
}

export default App;

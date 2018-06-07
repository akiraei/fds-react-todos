import React, { Component } from 'react';


const todos = [
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



class App extends Component {
  render() {
    return (
      <div container> 
     
      <div>React</div>

      <h1>todo list</h1>
      <ul> 
        {
          todos.map(todo => (
            <li key={todo.id}>{todo.body}</li>
            
          ))

        }
      </ul>
           
      </div>
    );
  }
}

export default App;

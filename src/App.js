import React, {Component} from 'react'
import Todo from './components/todoitems/todo';
import Add from './components/additem/add';
class App extends Component {
  
  state = {
    items: [
      {id: 1, name: 'karim', age:24},
      {id: 2, name: 'Ahmed', age:25},
      {id: 3, name: 'Aymen', age:26}
    ]
  }

deleteItem = (id) => {
  let items = this.state.items.filter(item => {
    return item.id !== id
  })
  this.setState({items})
}

    addItem = (item) =>{
      item.id = Math.random();
      let items = this.state.items;
      items.push(item);
      this.setState({items})
    }

  render(){
    return(
      <div className='App container'>
        <h1 className='text-center'>Todo List</h1>
        <Todo items={this.state.items} deleteItem={this.deleteItem} />
        <Add addItem={this.addItem}/>
        </div>
    )
  }
}

export default App
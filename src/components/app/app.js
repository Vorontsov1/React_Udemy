import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

class  App extends Component {
    constructor(props) {
      super(props);
        this.state = {
          data:  [
            { name: 'James Hetfield', salary: 5000, increase: true, id: 1},
            { name: 'Lars Ulrich', salary: 3800, increase: false, id: 2},
            { name: 'Kirk Hammet', salary: 3760, increase: false, id: 3},
            { name: 'Robert Trujillo', salary: 3940, increase: false, id: 4},
          ]
        }
        this.maxId = 5;
    }
  

    deleteItem = (id) => {
      this.setState(({data}) => {
          return {
              data: data.filter(item => item.id !== id)
          }
      })
  }

  // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
  addItem = (name, salary) => {
      const newItem = {
          name, 
          salary,
          increase: false,
          rise: false,
          id: this.maxId++
      }
      this.setState(({data}) => {
          const newArr = [...data, newItem];
          return {
              data: newArr
          }
      });
  }

  onToggleProp = (id, prop) => {
      this.setState(({data}) => ({
          data: data.map(item => {
              if (item.id === id) {
                  return {...item, [prop]: !item[prop]}
              }
              return item;
          })
      }))
  }

  render() {
      const employers = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length;
      return (
          <div className="app">
              <AppInfo employers={employers} increased={increased}/>
  
              <div className="search-panel">
                  <SearchPanel/>
                  <AppFilter/>
              </div>
              
              <EmployersList 
                  data={this.state.data}
                  onDelete={this.deleteItem}
                  onToggleProp={this.onToggleProp}/>
              <EmployersAddForm onAdd={this.addItem}/>
          </div>
      );
  }
}

export default App;
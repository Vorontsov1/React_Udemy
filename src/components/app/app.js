import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

function App() {

  const data = [
    { name: 'James Hetfield', salary: 5000, increase: true, id: 1},
    { name: 'Lars Ulrich', salary: 3800, increase: false, id: 2},
    { name: 'Kirk Hammet', salary: 3760, increase: false, id: 3},
    { name: 'Robert Trujillo', salary: 3940, increase: false, id: 4},
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployersList data={data} />
      <EmployersAddForm />
    </div>
  );
}

export default App;

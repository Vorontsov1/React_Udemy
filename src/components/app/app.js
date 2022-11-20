import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

function App() {

  const data = [
    { name: 'James Hetfield', salary: 5000, increase: true },
    { name: 'Lars Ulrich', salary: 3800, increase: false },
    { name: 'Kirk Hammet', salary: 3760, increase: false },
    { name: 'Robert Trujillo', salary: 3940, increase: false },
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

import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        Усі співробітники
      </button>

      <button className="btn btn-outline-light" type="button">
        На підвищення
      </button>

      <button className="btn btn-outline-light" type="button">
        З/п більше $1000
          </button>
          
    </div>
  );
};

export default AppFilter;

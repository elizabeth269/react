import './App.css';
import Employee from './components/Employee';

function App() {
  console.log('we are about to reveal the employees')
  const employee = true;
  return (
    <div className="App">
      <header className="App-header">
        {employee ? 
        <>
          <Employee name='Elizabeth' role='intern'/>
          <Employee name='jane' role='intern'/>
          <Employee name='lierr'/>
          <Employee name='bread'/>
          <Employee name= 'beans'/>
          <Employee name= 'butter'/>
        </>
        :
        'we cannot show YOU the employees'
        }
        
      </header>
    </div>
  );
}

export default App;

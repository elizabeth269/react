import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  console.log('we are about to reveal the employees')
  const employee = true;
  const [role, setRole] = useState('dev'); //dev is a default variable

  return (
    <div className="App">
      <header className="App-header">
        {employee ? 
        (
          <>
          <input type = 'text' onChange={(e) => {console.log(e.target.value);
          setRole(e.target.value);}}/>
          <Employee name='Elizabeth' role='intern'/>
          <Employee name='jane' role='intern'/>
          <Employee name='lierr' role={role}/>
          <Employee name='bread'/>
          <Employee name= 'beans'/>
          <Employee name= 'butter'/>
          </>

        )
        
        :
        'we cannot show YOU the employees'
        }
        
      </header>
    </div>
  );
}

export default App;

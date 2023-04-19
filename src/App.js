import Form from './components/Form';
import Banner from './components/Banner';
import { useState } from 'react';

function App() {
  let [employees, setEmployees] = useState([]);

  const updateEmployeesList = (employee) => {
    setEmployees([...employees, employee]);
    console.log(employees);
  };

  return (
    <div className="App">
      <Banner />
      <Form updateEmployeesList={(employee) => updateEmployeesList(employee)} />
    </div>
  );
}

export default App;

import Form from './components/Form';
import Banner from './components/Banner';
import { useState } from 'react';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278',
    },
    {
      id: uuidv4(),
      name: 'Front End',
      color: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#DB6EBF',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#FAE9F5',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    },
  ]);

  let [employees, setEmployees] = useState([]);

  const updateEmployeesList = (employee) => {
    setEmployees([...employees, employee]);
  };

  const updateTeamColor = (color, id) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) team.color = color;
        return team;
      })
    );
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        updateEmployeesList={(employee) => updateEmployeesList(employee)}
      />
      {teams.map((team) => (
        <Team
          key={team.id}
          id={team.id}
          title={team.name}
          color={team.color}
          changeColor={updateTeamColor}
          employees={employees.filter(
            (employee) => employee.team === team.name
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

import Form from './components/Form';
import Banner from './components/Banner';
import { useState } from 'react';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      color: '#D9F7E9',
    },
    {
      name: 'Front End',
      color: '#E8F8FF',
    },
    {
      name: 'Data Science',
      color: '#F0F8E2',
    },
    {
      name: 'Devops',
      color: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      color: '#FAE9F5',
    },
    {
      name: 'Mobile',
      color: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      color: '#FFEEDF',
    },
  ]);

  let [employees, setEmployees] = useState([]);

  const updateEmployeesList = (employee) => {
    setEmployees([...employees, employee]);
  };

  const updateTeamColor = (color, teamName) => {
    setTeams(
      teams.map((team) => {
        if (team.name === teamName) team.color = color;
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
          key={team.name}
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

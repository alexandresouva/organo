import './Team.css';
import EmployeeCard from '../EmployeeCard';
import hexToRgba from 'hex-to-rgba';

const Team = ({
  team,
  employees,
  changeColor,
  whenDeleting: deleteEmployee,
  whenToFavorite: favoriteEmployer,
}) => {
  const updateTeamColor = (e) => {
    changeColor(e.target.value, team.id);
  };
  return (
    employees.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: hexToRgba(team.color, '0.2'),
          backgroundImage: 'url(/images/fundo.png',
        }}
      >
        <input
          value={team.color}
          onChange={updateTeamColor}
          type="color"
          className="team__color"
        />
        <h3 className="team__title" style={{ borderColor: team.color }}>
          {team.name}
        </h3>
        <div className="team__employees">
          {employees.map((employee, i) => (
            <EmployeeCard
              key={i}
              employee={employee}
              color={team.color}
              whenDeleting={deleteEmployee}
              whenToFavorite={favoriteEmployer}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;

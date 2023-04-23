import './Team.css';
import EmployeeCard from '../EmployeeCard';
import hexToRgba from 'hex-to-rgba';

const Team = ({ id, title, color, changeColor, employees }) => {
  const updateTeamColor = (e) => {
    changeColor(e.target.value, id);
  };

  return (
    employees.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: hexToRgba(color, '0.2'),
          backgroundImage: 'url(/images/fundo.png',
        }}
      >
        <input
          value={color}
          onChange={updateTeamColor}
          type="color"
          className="team__color"
        />
        <h3 className="team__title" style={{ borderColor: color }}>
          {title}
        </h3>
        <div className="team__employees">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.image}
              name={employee.name}
              position={employee.position}
              image={employee.image}
              color={color}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;

import './Team.css';
import EmployeeCard from '../EmployeeCard';

const Team = (props) => {
  return (
    props.employees.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 className="team__title" style={{ borderColor: props.primaryColor }}>
          {props.title}
        </h3>
        <div className="employees">
          {props.employees.map((employee) => (
            <EmployeeCard
              key={employee.image}
              name={employee.name}
              position={employee.position}
              image={employee.image}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;

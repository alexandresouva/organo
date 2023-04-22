import './Team.css';
import EmployeeCard from '../EmployeeCard';

const Team = ({ title, primaryColor, secondaryColor, employees }) => {
  return (
    employees.length > 0 && (
      <section className="team" style={{ backgroundColor: secondaryColor }}>
        <h3 className="team__title" style={{ borderColor: primaryColor }}>
          {title}
        </h3>
        <div className="employees">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.image}
              name={employee.name}
              position={employee.position}
              image={employee.image}
              bgColor={primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;

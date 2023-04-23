import './EmployeeCard.css';
import { FaWindowClose } from 'react-icons/fa';

const EmployeeCard = ({ employee, color, whenDeleting: deleteEmployee }) => {
  return (
    <div className="employee">
      <FaWindowClose
        onClick={() => deleteEmployee(employee.id)}
        size={24}
        className="employee__deleteBtn"
      />
      <div className="employee__header" style={{ backgroundColor: color }}>
        <img
          className="employee__photo"
          src={employee.image}
          alt={`Foto de perfil do(a) ${employee.name}`}
        />
      </div>
      <div className="employee__footer">
        <h4>{employee.name}</h4>
        <h5>{employee.position}</h5>
      </div>
    </div>
  );
};

export default EmployeeCard;

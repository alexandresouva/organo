import './EmployeeCard.css';

const EmployeeCard = ({ name, position, image }) => {
  return (
    <div className="employee">
      <div className="employee__header">
        <img
          className="employee__photo"
          src={image}
          alt={`Foto de perfil do(a) ${name}`}
        />
      </div>
      <div className="employee__footer">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default EmployeeCard;

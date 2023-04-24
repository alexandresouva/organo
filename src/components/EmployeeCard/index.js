import './EmployeeCard.css';
import { FaWindowClose } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';

const EmployeeCard = ({
  employee,
  color,
  whenDeleting: deleteEmployee,
  whenToFavorite: favoriteEmployer,
}) => {
  // const [isFavorite, setIsFavorite] = useState(employee.favorite);

  // const favoriteToggle = () => {
  //   setIsFavorite(!isFavorite);
  // };

  const toggleFavoriteEmployer = () => {
    favoriteEmployer(employee.id);
  };
  const favoriteIconProps = {
    size: 24,
    onClick: toggleFavoriteEmployer,
    className: 'favoriteIcon',
  };
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
        {employee.favorite ? (
          <AiFillHeart {...favoriteIconProps} color="rgb(199, 51, 51)" />
        ) : (
          <AiOutlineHeart {...favoriteIconProps} />
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;

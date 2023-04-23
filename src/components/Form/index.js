import './Form.css';
import Input from '../Input';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
  const teams = props.teams;
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState(teams[0]);
  let [teamName, setTeamName] = useState('');
  let [teamColor, setTeamColor] = useState('#0B1238');

  const createCard = (e) => {
    e.preventDefault();

    props.updateEmployeesList({
      id: uuidv4(),
      name,
      position,
      image,
      team,
    });

    setName('');
    setPosition('');
    setImage('');
    setTeam(teams[0]);
  };

  const createTeam = (e) => {
    e.preventDefault();

    props.createTeam({ name: teamName, color: teamColor });

    setTeamName('');
    setTeamColor('#0B1238');
  };

  return (
    <section className="form">
      <form onSubmit={createTeam}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Input
          label="Nome"
          placeholder="Digite o nome do time"
          required={true}
          value={teamName}
          updateValue={(value) => setTeamName(value)}
        />
        <Input
          type="color"
          label="Color"
          required={true}
          value={teamColor}
          updateValue={(value) => setTeamColor(value)}
        />
        <Button>Criar Card</Button>
      </form>
      <form onSubmit={createCard}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          label="Nome"
          placeholder="Digite o seu nome"
          required={true}
          value={name}
          updateValue={(value) => setName(value)}
        />
        <Input
          label="Cargo"
          placeholder="Digite o seu cargo"
          required={true}
          value={position}
          updateValue={(value) => setPosition(value)}
        />
        <Input
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          required={true}
          value={image}
          updateValue={(value) => setImage(value)}
        />
        <Dropdown
          label="Times"
          items={props.teams}
          required={true}
          value={team}
          updateValue={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;

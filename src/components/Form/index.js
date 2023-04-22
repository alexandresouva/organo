import './Form.css';
import TextInput from '../TextInput';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {
  const teams = props.teams;
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState(teams[0]);

  const submitForm = (e) => {
    e.preventDefault();

    props.updateEmployeesList({
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

  return (
    <section className="form">
      <form onSubmit={submitForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput
          label="Nome"
          placeholder="Digite o seu nome"
          required={true}
          value={name}
          updateValue={(value) => setName(value)}
        />
        <TextInput
          label="Cargo"
          placeholder="Digite o seu cargo"
          required={true}
          value={position}
          updateValue={(value) => setPosition(value)}
        />
        <TextInput
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

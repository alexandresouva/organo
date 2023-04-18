import './Form.css';
import TextInput from '../TextInput';
import Dropdown from '../Dropdown';
import Button from '../Button';

const Form = () => {
  const teams = [
    'Programação',
    'Front End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput label="Nome" placeholder="Digite o seu nome" />
        <TextInput label="Cargo" placeholder="Digite o seu cargo" />
        <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
        <Dropdown label="Times" items={teams} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;

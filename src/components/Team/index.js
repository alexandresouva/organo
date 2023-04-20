import './Team.css';

const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 className="team__title" style={{ borderColor: props.primaryColor }}>
        {props.title}
      </h3>
    </section>
  );
};

export default Team;

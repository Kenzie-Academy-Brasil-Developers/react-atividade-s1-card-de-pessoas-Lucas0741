import "./style.css";

function Developer({ name, age, country }) {
  return (
    <div className="UserCard">
      <span>
        <h1>Dev: {name} </h1>
        <h2>Idade: {age} </h2>
        <h2>País: {country} </h2>
      </span>
    </div>
  );
}

export default Developer;

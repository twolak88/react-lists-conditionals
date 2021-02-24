import './Person.css';

const person = (props) => {
  const rnd = Math.random();
  if (rnd > 0.8) {
    throw new Error('Randomly throw error');
  }
  return (
    <div className="Person">
      <p onClick={ props.click }>
        He is { props.name } and he is { props.age }!
      </p>
      <p>{ props.children }</p>
      <input type="text" onChange={ props.changed } value={ props.name } />
    </div>
  );
};

export default person;

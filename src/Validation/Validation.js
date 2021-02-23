
const validation = (props) => {
  let message = 'Text long enough';
  if (props.inputLength < 5) {
    message = 'Text too short';
  }
  return (<p>{ message }</p>);
}

export default validation;

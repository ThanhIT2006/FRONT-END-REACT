import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
  return (
    <div>
        <Spinner animation="border" variant="primary" /> <br />
      <Spinner animation="border" variant="secondary" /><br />
      <Spinner animation="border" variant="success" /><br />
    </div>
  );
}

export default BasicExample;
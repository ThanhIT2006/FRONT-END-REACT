import Form from 'react-bootstrap/Form';

function InputSizesExample() {
  return (
    <>
      <Form.Control size="lg" type="text" placeholder="Input cỡ lớn" />
      <br />
      <Form.Control type="text" placeholder="Input cỡ trung bình" />
      <br />
      <Form.Control size="sm" type="text" placeholder="Input cỡ bé" />
    </>
  );
}

export default InputSizesExample;
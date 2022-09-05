import Card from 'react-bootstrap/Card';

function PersonalInfo(props) {
  const { text, img, name } = props.info;
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PersonalInfo;

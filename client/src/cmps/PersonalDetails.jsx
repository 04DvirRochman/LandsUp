import Card from 'react-bootstrap/Card';

function PersonalInfo(props) {
  const { text, img, name } = props.info;
  return (
    
    <Card className = "personcard m-2 shadow text-white bg-dark mb-3">
      <Card.Img variant="top" src={img} />
      <Card.Body >
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PersonalInfo;

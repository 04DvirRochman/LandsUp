import PersonalInfo from "./PersonalDetails";
import Container from 'react-bootstrap/Container';

function PersonalInfoList(props) {
  return (
    <Container className="mt-5">
      <h4 className = "text-center">We made this website with blood sweat and tears. <br></br> we will win and i am eating shawarma</h4>
      <div className="d-flex  container">
        {props.info.map((person, index) => {
          return (
              <PersonalInfo key={index} className = "mt-2 " info={person} />
          );
        })}
      </div>
    </Container>
  );
}



export default PersonalInfoList;
